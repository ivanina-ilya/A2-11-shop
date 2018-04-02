import { Injectable } from '@angular/core';
import { Counter } from '../model/Counter';
import { Product } from '../model/Product';
import { DBObject } from './DBObject';

@Injectable()
export class StorageService {

  static isInit = false;
  private storage: DBObject = DBObject.Instance;

  constructor() {
    this.init();
  }

  //

  addProduct(product: Product, count?: number): void {
    if ( !product ) { throw new Error('The Product cannot be empty'); }
    if ( typeof count === 'undefined') {count = 1; }
    if ( !this.isProductExist(product)) { this.getProducts().push(product); }
    this.pushInStock(product.sku, count);
  }

  removeProduct(product: Product|string): void {
    const sku: string = typeof product === 'string' ? product : (product as Product).sku;
    let index = this.getProducts().map(it => it.sku).indexOf(sku);
    this.getProducts().splice( index, 1);
    index = this.storage.inStock.map(it => it.sku).indexOf(sku);
    this.storage.inStock.splice( index, 1);
  }

  isProductExist(product: Product | string): boolean {
    const sku: string = typeof product === 'string' ? product : (product as Product).sku;
    return this.getProducts().find( it => it.sku === sku) !== undefined;
  }

  getProduct(sku: string): Product {
    return this.getProducts().find( it => it.sku === sku );
  }

  getProducts(): Product[] {
    return this.storage.products;
  }


  isInStock(sku: string): boolean {
    return this.getInStock( sku ) !== undefined;
  }

  getInStock(sku: string): Counter {
    return this.storage.inStock.find( it => it.sku === sku );
  }

  inStock(sku: string): number {
    const counter: Counter = this.getInStock(sku);
    return typeof counter === 'undefined' ? 0 : counter.count;
  }

  pushInStock(sku: string, count?: number): number {
    if ( typeof count === 'undefined' ) { count = 1; }
    const counter: Counter = this.getInStock(sku); // if will be problems - rewrite to indexOf
    if ( !counter ) { this.storage.inStock.push( new Counter(sku, count) );
    } else {
      counter.count += count;
      count = counter.count;
    }
    return count;
  }

  popInStock(sku: string, count?: number): number {
    if ( typeof count === 'undefined' ) { count = 1; }
    const counter: Counter = this.getInStock(sku);
    if ( counter === undefined ) { throw new Error(`The product with SKU '${sku}' is missing in Stock`); }
    if ( counter.count < count ) {
      throw new Error(`The product with SKU '${sku}' is available in quantity ${counter.count} but requested ${count}`);
    }
    counter.count -= count;
    return counter.count;
  }

  // For test preFilling product list

  init(): void {
    if ( StorageService.isInit ) { throw new Error('The product list can be initialized once'); }
    StorageService.isInit = true;
    console.log('ProductsService init: start');
    // init and fill product list
    this.addProduct(
      new Product('SKU-P-1', 'Product one', 150.50, 'This is description for Product one'),
      5
    );
    this.addProduct(
      new Product('SKU-P-2', 'Product two', 20, 'This is description for Product two'),
      0
    );
    this.addProduct(
      new Product('SKU-P-3', 'Product three', 75.25, 'This is description for Product three'),
      2
    );
    this.addProduct(
      new Product('SKU-P-4', 'Product four', 99.90, 'This is description for Product four'),
      10
    );

  }
}
