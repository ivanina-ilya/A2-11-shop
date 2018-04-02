import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {DemoModule} from './demo/demo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,

    ProductsModule,
    CartModule,
    DemoModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
