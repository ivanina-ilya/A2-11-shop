import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Product} from "../../model/Product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {

  @Input('product') product: Product;
  constructor(
    private cartService: CartService
    ) { }

  ngOnInit() {
    console.log('Product in Cart ItemComponent has been init')
  }

  ngOnDestroy() {
    console.log('Product in Cart ItemComponent has been destroyed')
  }

  inStock(): number {
    return this.cartService.inCart(this.product.sku);
  }

  getPrice(): number {
    return this.inStock() * this.product.price ;
  }

  add(): void {
    this.cartService.addToCart(this.product.sku,1);
  }

  reduce(): void {
    this.cartService.removeFromCart(this.product.sku,1);
  }

  remove(): void {
    this.cartService.removeAllFromCart(this.product.sku);
  }

  isAvailable(): boolean {
    return this.cartService.isProductAvailable(this.product.sku) ;
  }

}
