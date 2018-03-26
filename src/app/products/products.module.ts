import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import {ProductsService} from "./products.service";
import {CartModule} from "../cart/cart.module";


@NgModule({
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService
  ],
  declarations: [
    ProductComponent,
    ProductsComponent
  ]
})
export class ProductsModule { }
