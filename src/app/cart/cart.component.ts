import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../model/Product';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    protected cartService: CartService
  ) { }

  ngOnInit() {
  }

  getProductCountInCart(sku?: string): number {
    return this.cartService.getProductCountInCart(sku);
  }

  getProductsInCart(): Product[] {
    return this.cartService.getProductsInCart();
  }

  getPrice(sku: string): number {
    return this.cartService.price(sku);
  }

  total(): number {
    return this.cartService.total();
  }

  addOne(sku: string): void {
    this.cartService.addToCart(sku, 1);
  }

  removeOne(sku: string): void {
    this.cartService.removeFromCart(sku, 1);
  }

  deleteProduct(sku: string): void {
    this.cartService.removeFromCart(sku);
  }

  isAvailable(sku: string): boolean {
    return this.cartService.isAvailableInStock(sku);
  }

}
