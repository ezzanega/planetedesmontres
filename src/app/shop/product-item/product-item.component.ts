import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  standalone: false
})
export class ProductItemComponent {
  @Input() product!: IProduct;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public compareService: CompareService,
    public utilsService: UtilsService,
  ) { }

  // add to cart
  addToCart(item: IProduct) {
    this.cartService.addCartProduct(item);
  }

  // add to cart
  addToWishlist(product: IProduct) {
    this.wishlistService.add_wishlist_product(product);
  }

  // add to cart
  addToCompare(product: IProduct) {
    this.compareService.add_compare_product(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
  isItemInWishlist(item: IProduct): boolean {
    return this.wishlistService.getWishlistProducts().some((prd: IProduct) => prd.id === item.id);
  }
  isItemInCompare(item: IProduct): boolean {
    return this.compareService.getCompareProducts().some((prd: IProduct) => prd.id === item.id);
  }
  sendToWhatsApp(): void {
    const message = `🛍️ *${this.product.title}*\n💰 Prix: MAD ${this.product.price.toFixed(2)}${this.product.old_price ? ' ~~MAD ' + this.product.old_price.toFixed(2) + '~~' : ''}\n🖼️ Photo: ${window.location.origin}/${this.product.img}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  }
}
