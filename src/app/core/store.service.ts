import { Injectable, OnInit } from '@angular/core';
import {Counter} from "../model/Counter";
import {Product} from "../model/Product";

@Injectable()
export class StoreService implements OnInit{

  private _inStock: Counter[] = [];
  private products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // products handling

  addProduct(product: Product, count?: number): void {
    if( !product ) { new Error('The Product cannot be empty'); }
    if( typeof count === 'undefined') {count = 1; }
    if( !this.isProductExist(product)) { this.products.push(product); }
    this.pushInStock(product.sku, count);
  }

  removeProduct(product: Product|string): void {
    let sku: string = typeof product === 'string' ? product : (product as Product).sku;
    let index = this.products.map(it => it.sku).indexOf(sku);
    this.products.splice( index,1);
    index = this._inStock.map(it => it.sku).indexOf(sku);
    this._inStock.splice( index,1);
  }

  isProductExist(product: Product | string): boolean {
    let sku: string = typeof product === 'string' ? product : (product as Product).sku;
    return this.products.find( it => it.sku === sku) !== undefined;
  }

  getProduct(sku: string): Product {
    return this.products.find( it => it.sku === sku )
  }

  getProducts(): Product[] {
    return this.products;
  }

  // _inStock handling

  isInStock(sku: string): boolean {
    return this.getInStock( sku ) !== undefined;
  }

  getInStock(sku: string): Counter {
    return this._inStock.find( it => it.sku === sku );
  }

  inStock(sku: string): number {
    let counter: Counter = this.getInStock(sku);
    return typeof counter === 'undefined' ? 0 : counter.count;
  }

  pushInStock(sku: string, count?: number): number {
    if( typeof count === 'undefined' ) { count = 1;}
    let counter: Counter = this.getInStock(sku); // if will be problems - rewrite to indexOf
    if( !counter ) { this._inStock.push( new Counter(sku,count) ); }
    else {
      counter.count += count;
      count = counter.count;
    }
    return count;
  }

  popInStock(sku: string, count?: number): number {
    if( typeof count === 'undefined' ) { count = 1;}
    let counter: Counter = this.getInStock(sku);
    if( counter === undefined ) { new Error(`The product with SKU '${sku}' is missing in Stock`); }
    if( counter.count < count ) {
      new Error(`The product with SKU '${sku}' is available in quantity ${counter.count} but requested ${count}`);
    }
    counter.count -= count;
    return counter.count;
  }

}
