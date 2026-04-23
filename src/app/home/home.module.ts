import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeOneComponent } from './home-one/home-one.component';
import { ShopModule } from '../shop/shop.module';
import { ListProductItemComponent } from "src/app/shop/list-products/list-product-item/list-product-item.component";
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HomeOneComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ShopModule,
    ListProductItemComponent,
    RouterModule,
]
})
export class HomeModule { }
