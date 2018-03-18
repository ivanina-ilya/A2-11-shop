import { Injectable } from '@angular/core';
import { CounterType } from '../model/CounterType';
import { ProductsService } from '../product/products.service';
import { Product } from '../model/Product';
import { ProductStoreSingleton } from '../model/ProductStoreSingleton';

@Injectable()
export class CartService {
  protected inStock: ProductStoreSingleton = ProductStoreSingleton.Instance;
  private _inCart: CounterType[] = new Array();

  constructor(protected productsService: ProductsService) {}

  addToCart(sku: string, count?: number): void {
    if (typeof count === 'undefined') { count = 1; }
    this.inStock.pop(sku, count);
    this._inCart[sku] = typeof this._inCart[sku] !== 'undefined' ? this._inCart[sku] + count : count ;
  }

  getSkuInCart(): string[] {
    return Object.keys( this._inCart );
  }

  getProductsInCart(): Product[] {
    return this.productsService.getProducts( this.getSkuInCart() );
  }

  getProductCountInCart(sku?: string): number {
    if (typeof sku !== 'undefined') {
      return this._inCart[sku];
    }
    // else:
    let cnt = 0;
    Object.keys( this._inCart ).forEach(_sku => cnt += this._inCart[_sku]);
    return cnt;
  }


  removeFromCart(sku: string, count?: number): number {
    if (this.inCart(sku) === 0) {
      throw new Error(`The product with SKU '${sku}' not found in cart`);
    }
    if (typeof count === 'undefined') {
      count = this._inCart[sku];
      delete this._inCart[sku];
    } else {
      if (this._inCart[sku] < count) {
        throw new Error(`Such quantity (${count}) of a product with SKU '${sku}' is not available in cart`);
      } else if (this._inCart[sku] === count) {
        delete this._inCart[sku];
      } else {
        this._inCart[sku] -= count;
      }
    }

    this.inStock.push(sku, count);
    return count;
  }

  cleanCart(): void {
    Object.keys( this._inCart ).forEach(sku => this.inStock.push(sku, this._inCart[sku]));
    this._inCart = new Array();
  }

  inCart(sku: string): number {
    if (typeof this._inCart[sku] === 'undefined') {
      return 0;
    } else {
      return this._inCart[sku];
    }
  }

  price(sku: string): number {
    return this.productsService.getProductBySku(sku).price * this.inCart(sku);
  }

  total(): number {
    let total = 0;
    Object.keys( this._inCart ).forEach( sku => total += this.price(sku + '') );
    return total;
  }

  isAvailableInStock(sku: string): boolean {
    return this.productsService.isAvailable(sku);
  }

}
