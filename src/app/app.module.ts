import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {ProductsModule} from "./products/products.module";
import {CartModule} from "./cart/cart.module";
import { MouseOverHighlightDirective } from './directive/mouse-over-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    MouseOverHighlightDirective
  ],
  imports: [
    BrowserModule,
    CoreModule,

    ProductsModule,
    CartModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
