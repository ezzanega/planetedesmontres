import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-product-item',
  imports: [RouterModule,CommonModule],
  templateUrl: './list-product-item.component.html',
  styleUrl: './list-product-item.component.scss',
})
export class ListProductItemComponent {
  @Input() product!: any;

  getDiscountPercentage(): number {
    if (this.product.old_price && this.product.price) {
      return Math.round(
        ((this.product.old_price - this.product.price) / this.product.old_price) * 100
      );
    }
    return 0;
  }


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
