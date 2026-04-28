import { ProductDetailsUpperComponent } from './../../../shared/components/product-details-upper/product-details-upper.component';
import { Component } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";
import { DetailsProductAreaComponent } from '../details-peoduct-area/details-product-area.component';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details-product',
  imports: [DetailsProductAreaComponent,SharedModule,CommonModule],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.scss',
})
export class DetailsProductComponent {



  trustItems: any[];
  constructor(private sanitizer: DomSanitizer) {
    this.trustItems = [
      {
        title: 'Garantie 1 An',
        desc: 'Protection complète',
        svgPath: this.sanitizer.bypassSecurityTrustHtml(`
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        `)
      },
      {
        title: 'Livraison Gratuite',
        desc: 'À partir de 2000 DH',
        svgPath: this.sanitizer.bypassSecurityTrustHtml(`
          <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        `)
      },
      {
        title: '100% Original',
        desc: 'Produits authentiques',
        svgPath: this.sanitizer.bypassSecurityTrustHtml(`
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        `)
      },
      {
        title: 'Contact',
        desc: '+212 6 62 22 18 66',
        svgPath: this.sanitizer.bypassSecurityTrustHtml(`
          <path d="M3 5a2 2 0 0 1 2-2h2l1 5-2 2a16 16 0 0 0 6 6l2-2 5 1v2a2 2 0 0 1-2 2h-1C8 21 3 16 3 9V5z"/>
        `)
      }
    ];
  }

}
