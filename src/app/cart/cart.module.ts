import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ItemComponent } from './item/item.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import {CartService} from './cart.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddToCartComponent,
    CartComponent
  ],
  providers: [
    CartService
  ],
  declarations: [
    CartComponent,
    ItemComponent,
    AddToCartComponent
  ]
})
export class CartModule { }
