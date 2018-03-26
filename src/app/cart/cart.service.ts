import { Injectable } from '@angular/core';
import {Product} from "../model/Product";
import {StoreService} from "../core/store.service";
import {Counter} from "../model/Counter";

@Injectable()
export class CartService {

  private _inCart: Counter[] = [];

  constructor(private storeService: StoreService) { }

  getInCart(sku: string): Counter {
    return this._inCart.find( it => it.sku === sku );
  }

  inCart(sku?: string): number {
    if(typeof sku === 'undefined') {
      let cnt = 0;
      this._inCart.forEach(it => cnt += it.count);
      return cnt;
    }
    let counter: Counter = this.getInCart(sku);
    return typeof counter === 'undefined' ? 0 : counter.count;
  }

  addToCart(sku: string, count?: number): void {
    if( typeof count === 'undefined' ) { count = 1;}
    // add to cart
    let counter: Counter = this.getInCart(sku);
    if( !counter ) { this._inCart.push( new Counter(sku,count) ); }
    else { counter.count += count; }
    // remove from stock (reserved)
    this.storeService.popInStock(sku, count);
  }

  removeFromCart(sku: string, count?: number): number {
    if( typeof count === 'undefined' ) { count = 1;}
    let counter: Counter = this.getInCart(sku);
    if( counter === undefined ) { new Error(`The product with SKU '${sku}' is missing in Cart`); }
    if( counter.count < count ) {
      new Error(`The ${count} product(s) with SKU '${sku}' is not available in cart (${counter.count})`);
    }
    counter.count -= count;
    this.storeService.pushInStock(sku, count);

    if( counter.count === 0) {
      let index = this._inCart.map(it => it.sku).indexOf(sku);
      this._inCart.splice( index,1);
    }
    return counter.count;
  }

  removeAllFromCart(sku: string): number {
    return this.removeFromCart(sku, this.inCart(sku));
  }

  clearCart(): void {
    this._inCart = [];
  }


  // products handling

  isProductAvailable( sku: string, count?: number): boolean {
    if( typeof count === 'undefined' ) { count = 1;}
    return this.storeService.inStock(sku) - count >= 0;
  }

  getProductsInCart(): Product[] {
    return this._inCart.map(it => this.storeService.getProduct( it.sku) )
  }

  getTotal(): number {
    let total = 0;
    this._inCart.forEach( it => total += this.storeService.getProduct( it.sku ).price * it.count);
    return total;
  }


}
