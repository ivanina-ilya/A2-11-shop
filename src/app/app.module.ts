import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


import { AppComponent } from 'app/app.component';
import { ProductComponent } from 'app/product/product.component';
import { ProductsService } from 'app/product/products.service';
import { CatalogComponent } from 'app/catalog/catalog.component';
import { CartComponent } from 'app/cart/cart.component';


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
