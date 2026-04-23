import { Component } from '@angular/core';
import { AddProductComponent } from "../list-products/add-product/add-product.component";
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-manage-product',
  imports: [AddProductComponent,SharedModule],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.scss',
})
export class ManageProductComponent {

}
