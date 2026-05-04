import { Component, Input } from '@angular/core';
import { IProduct } from '../../types/product-d-t';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details-upper',
  templateUrl: './product-details-upper.component.html',
  styleUrls: ['./product-details-upper.component.scss'],
  standalone: false
})
export class ProductDetailsUpperComponent {
  @Input() product!: IProduct;
  @Input() bottomShow: boolean = true;
  @Input() style_2: boolean = false;

  selectedSize: string = '';
  selectedColor: string = '';

  // Your WhatsApp business number
  whatsappNumber: string = '212662221866'; // +212 6 42 73 64 34

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) { }

  ngOnInit() {
    if (this.product) {
      this.productService.activeImg = this.product.img;
    }
  }

  isOrderValid(): boolean {
    return this.selectedSize !== '' &&
      this.selectedColor !== '' &&
      this.cartService.orderQuantity > 0;
  }

  sendWhatsAppOrder(): void {
    if (!this.isOrderValid()) {
      alert('Veuillez sélectionner la taille, la couleur et la quantité');
      return;
    }

    // const message = this.formatWhatsAppMessage();
    // const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;

    // window.open(whatsappUrl, '_blank');

    this.getWhatsAppLink(this.product);
  }

  // private formatWhatsAppMessage(): string {
  //   const productUrl = `${window.location.origin}/shop/shop-details/${this.product.id}`;

  //   return `*NOUVELLE COMMANDE*

  // *Produit:* ${this.product.title}
  // *Prix:* $${this.product.price.toFixed(2)}
  // *Catégorie:* ${this.product.category}

  // *Détails de la commande:*
  // ━━━━━━━━━━━━━━━━━
  // *Taille:* ${this.selectedSize}
  // *Couleur:* ${this.selectedColor}
  // *Quantité:* ${this.cartService.orderQuantity}
  // *Total:* $${(this.product.price * this.cartService.orderQuantity).toFixed(2)}

  // *Lien produit:* ${productUrl}

  // Merci de confirmer la disponibilité.`;
  // }

    // In your component.ts

  getWhatsAppLink(product: any): string {
    const phoneNumber = '212662221866';

    const message = encodeURIComponent(
      `*New Product Inquiry*\n` +
      `━━━━━━━━━━━━━━━━━━\n\n` +
      `*Product Details*\n` +
      `*Name:* ${product.title}\n` +
      `*Price:* MAD ${product.price.toFixed(2)}${product.old_price ? ` ~~MAD ${product.old_price.toFixed(2)}~~` : ''}\n` +
      `${product.discount ? `*Discount:* -${product.discount}%\n` : ''}` +
      `${product.category ? `*Category:* ${product.category}\n` : ''}` +
      `${product.brand ? `*Brand:* ${product.brand}\n` : ''}` +
      `${product.sku ? `*SKU:* ${product.sku}\n` : ''}` +
      `${product.stock ? `*Stock:* ${product.stock} units available\n` : ''}` +
      `\n━━━━━━━━━━━━━━━━━━\n` +
      `*Product Link:*\n` +
      `${window.location.origin}/boutique/shop-details/${product.id}\n` +
      `━━━━━━━━━━━━━━━━━━\n\n` +
      `Hello! I am interested in this product. Could you please provide more information?`
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  }
}
