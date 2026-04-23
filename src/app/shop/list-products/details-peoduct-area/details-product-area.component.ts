import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductManagementService } from 'src/app/shared/services/product/product-management.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductDetailsUpperComponent } from 'src/app/shared/components/product-details-upper/product-details-upper.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-details-product-area',
  imports: [CommonModule, FormsModule],
  templateUrl: './details-product-area.component.html',
  styleUrl: './details-product-area.component.scss',
})
export class DetailsProductAreaComponent implements OnInit, OnDestroy {
  product: any;
  selectedImage: string = '';
  selectedSize: string = '';
  selectedColor: string = '';
  quantity: number = 1;
  style_2: boolean = false;
  bottomShow: boolean = true;
  loading: boolean = false;
  error: string | null = null;

  private subscription = new Subscription();

  constructor(
    private productService: ProductManagementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const uid = this.route.snapshot.params['uid'];
    if (uid) {
      this.fetchProduct(uid);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchProduct(id: number): void {
    this.loading = true;
    this.error = null;

    const sub = this.productService.getProductById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.product = response.data;

          // Set default image: use first related image if available, otherwise main image
          if (this.product.related_images && this.product.related_images.length > 0) {
            this.selectedImage = this.getFullImageUrl(this.product.img);
          } else {
            this.selectedImage = this.getFullImageUrl(this.product.related_images[0]);
          }

          // Debug: Check the data
          console.log('Product:', this.product);
          console.log('Related Images:', this.product.related_images);
          console.log('Selected Image:', this.selectedImage);
        } else {
          this.error = response.message || 'Failed to fetch product.';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Something went wrong.';
        this.loading = false;
      }
    });

    this.subscription.add(sub);
  }

  getFullImageUrl(img: string): string {
    if (!img) return '';
    return img.startsWith('http') ? img : `https://ebackendapi.hnam3ak.ma${img}`;
  }

  // Handle image selection from thumbnails
  selectImage(img: string): void {
    this.selectedImage = this.getFullImageUrl(img);
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  getProductDetails(): { key: string; value: string }[] {
    if (!this.product?.details) return [];
    try {
      const parsed = typeof this.product.details === 'string'
        ? JSON.parse(this.product.details)
        : this.product.details;
      return Object.entries(parsed).map(([key, value]) => ({
        key: this.formatKey(key),
        value: String(value)
      }));
    } catch {
      return [];
    }
  }

  private formatKey(key: string): string {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }


  // Toast messages
  showSuccessMessage = false;
  showErrorMessage = false;
  successMessage = '';
  errorMessage = '';

  onSubmit(): void {
    // Validation du formulaire
    if (this.product.sizes && this.product.sizes.length > 0 && !this.selectedSize) {
      this.showError('Veuillez sélectionner une taille');
      return;
    }

    if (this.product.colors && this.product.colors.length > 0 && !this.selectedColor) {
      this.showError('Veuillez sélectionner une couleur');
      return;
    }

    // Préparer les détails de la commande
    const orderDetails = {
      product: this.product.title,
      price: this.product.price,
      size: this.selectedSize || 'Non spécifiée',
      color: this.selectedColor || 'Non spécifiée',
      quantity: this.quantity,
      total: (parseFloat(this.product.price) * this.quantity).toFixed(2)
    };

    // Message WhatsApp
    const message = `Bonjour, je souhaite passer une commande :\n\n` +
      `🛍️ Produit : ${orderDetails.product}\n` +
      `💰 Prix unitaire : ${orderDetails.price} MAD\n` +
      `📏 Taille : ${orderDetails.size}\n` +
      `🎨 Couleur : ${orderDetails.color}\n` +
      `🔢 Quantité : ${orderDetails.quantity}\n` +
      `💵 Total : ${orderDetails.total} MAD`;

    const phoneNumber = '212642736434';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Feedback utilisateur (succès)
    this.showSuccess('Redirection vers WhatsApp...');

    // Ouvrir WhatsApp
    window.open(whatsappUrl, '_blank');
  }

  private showSuccess(message: string): void {
    this.successMessage = message;
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 4000);
  }

  private showError(message: string): void {
    this.errorMessage = message;
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 4000);
  }
}
