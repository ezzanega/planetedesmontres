import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';
import { IHeroSlider } from 'src/app/shared/types/hero-slider-t';
import { HeroSliderData } from 'src/app/shared/data/hero-slider-data';
import { Subscription } from 'rxjs';
import { ProductManagementService } from 'src/app/shared/services/product/product-management.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss'],
  standalone: false
})

export class HomeOneComponent {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public hero_slider_data: IHeroSlider[] = HeroSliderData.hero_slider_one;
  public trendingProducts: IProduct[] = [];
  public bannerProducts: IProduct[] = [];
  public discountProducts: IProduct[] = [];
  public perView: number = 8;


  bestSellerProducts: any[] = [];
  saleProducts: any[]        = [];
  loading = false;
  error: string | null = null;
  private subscription = new Subscription();
instagramPhotos = [
  { image: 'assets/img/reviews/1.jpg', alt: 'Instagram photo 1', likes: 284, comments: 18, link: 'https://instagram.com/p/...' },
  { image: 'assets/img/reviews/2.jpg', alt: 'Instagram photo 2', likes: 512, comments: 31, link: 'https://instagram.com/p/...' },
  { image: 'assets/img/reviews/IMG_1013.jpg', alt: 'Instagram photo 3', likes: 198, comments: 9,  link: 'https://instagram.com/p/...' },
  { image: 'assets/img/reviews/IMG_1014.jpg', alt: 'Instagram photo 4', likes: 347, comments: 22, link: 'https://instagram.com/p/...' },
  { image: 'assets/img/reviews/IMG_1015.jpg', alt: 'Instagram photo 5', likes: 621, comments: 44, link: 'https://instagram.com/p/...' },
];


  constructor(private productService: ProductService, private myproductService: ProductManagementService) {
    this.productService.products.subscribe((products) => {
      this.trendingProducts = products.filter((p) => p.trending);
      this.bannerProducts = products.filter((p) => p.banner).slice(0, 2);
      this.discountProducts = products.filter((p) => p.discount! > 0).slice(0, 5);
    });
  }
  ngOnInit(): void {
    this.fetchBestSellers();
    this.fetchSaleProducts();
  }


private fetchBestSellers(): void {
  this.loading = true;

  const sub = this.myproductService.getBestSellers().subscribe({
    next: (response) => {
      if (response.success) {
        this.bestSellerProducts = response.data.slice(0, 10).map((p: any) => ({
          ...p,

          // ✅ Fix numbers
          price: Number(p.price) || 0,
          old_price: Number(p.old_price) || 0,

          // ✅ Fix images
          img: this.getImageUrl(p.img),
          thumb_img: this.getImageUrl(p.thumb_img),

          // ✅ If you have multiple images
          related_images: (p.related_images || []).map((img: string) =>
            this.getImageUrl(img)
          )
        }));
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

private fetchSaleProducts(): void {
  this.loading = true;
  const sub = this.myproductService.getSaleProducts().subscribe({
    next: (response) => {
      if (response.success) {
        this.saleProducts = response.data.slice(0, 10).map((p: any) => ({
          ...p,
          price:     Number(p.price) || 0,
          old_price: Number(p.old_price) || 0,
          img:       this.getImageUrl(p.img),
          thumb_img: this.getImageUrl(p.thumb_img),
          related_images: (p.related_images || []).map((img: string) =>
            this.getImageUrl(img)
          )
        }));
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
    private getImageUrl(path: string): string {
    if (!path) return '';
    // If path already includes http, return as is
    if (path.startsWith('http')) return path;
    // Otherwise prepend base URL
    return 'https://shop.planetedesmontre.com' + path;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // handle per view
  handlePerView() {
    this.perView = this.perView + 4;
  }

  ngAfterViewInit() {
    if (this.heroSliderContainer) {
      this.swiperInstance = new Swiper('.slider-active', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        effect: 'fade',
        modules: [Pagination, EffectFade],
        pagination: {
          clickable: true,
          el: '.tp-slider-dot'
        },
      })
    }
      new Swiper('.client-convo__slider', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1200: { slidesPerView: 5 }
    }
  });
  }


}
