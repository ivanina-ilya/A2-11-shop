import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import {Product} from '../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log('CartComponent has been init');
  }


  getProducts(): Product[] {
    return this.cartService.getProductsInCart();
  }

  getCount(): number {
    return this.cartService.inCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}
