import { Component,Input } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
    selector: 'app-product-banner',
    templateUrl: './product-banner.component.html',
    styleUrls: ['./product-banner.component.scss'],
    standalone: false
})
export class ProductBannerComponent {
  @Input() style_2: boolean = false;
  @Input() style_3: boolean = false;

  banners = [
    {
      label: 'Homme',
      type: 'Homme',
      title: 'Montres pour Homme',
      desc: 'Découvrez des montres pour homme au design puissant, élégant et intemporel.',
      banner_img: 'assets/img/slider/banner-42.png',
      itemClass: 'banner-right pr-15',
    },
    {
      label: 'Femme',
      type: 'Femme',
      title: 'Montres pour Femme',
      desc: 'Explorez des montres pour femme raffinées, modernes et sophistiquées.',
      banner_img: 'assets/img/slider/2.png',
      itemClass: 'banner-left pl-15',
    }
  ];

  getContentClass(index: number): string {
    let cls = 'banner__content-2 p-absolute transition-3';
    if (this.style_3) cls += ' banner__content-4';
    if (index !== 0 && this.style_3) cls += ' banner__content-4-right';
    return cls;
  }

  getDescWidth(): number {
    return this.style_3 ? 250 : 300;
  }
}
