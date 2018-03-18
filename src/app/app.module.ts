import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './product/products.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CatalogComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
