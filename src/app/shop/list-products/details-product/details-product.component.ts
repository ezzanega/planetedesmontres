import { ProductDetailsUpperComponent } from './../../../shared/components/product-details-upper/product-details-upper.component';
import { Component } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";
import { DetailsProductAreaComponent } from '../details-peoduct-area/details-product-area.component';
@Component({
  selector: 'app-details-product',
  imports: [DetailsProductAreaComponent,SharedModule],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.scss',
})
export class DetailsProductComponent {

}
