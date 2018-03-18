import { Injectable } from '@angular/core';
import { isNumber } from 'util';

import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { ProductStoreSingleton } from '../model/ProductStoreSingleton';
import { ProductMapType } from '../model/ProductMapType';

@Injectable()
export class ProductsService {

  private products: ProductMapType[] = new Array();
  inStock: ProductStoreSingleton = ProductStoreSingleton.Instance;

  constructor() {

    this.products['81BF00EFRA'] = new Product(
      '81BF00EFRA',
      'Lenovo IdeaPad 520-15', '15.6" IPS (1920x1080) Full HD, Intel Core i5-8250U',
      Category.Laptop,
      655.99
    );
    this.products['FX553VE-DM406'] = new Product(
      'FX553VE-DM406',
      'Asus FX553VE', '15.6" (1920x1080) Full HD,  Intel Core i5-7300HQ, nVidia GeForce GTX 1050 T',
      Category.Laptop,
      875.00
    );
    this.products['MPGT2RK/A'] = new Product(
      'MPGT2RK/A',
      'Apple iPad A1822 Wi-Fi 32GB',
      '9.7" IPS (2048x1536), Apple A9, iOS 10',
      Category.Tables,
      999.99
    );

    this.inStock.push('81BF00EFRA', 1);
    this.inStock.push('FX553VE-DM406', 3);
    this.inStock.push('81BF00EFRA', 0);
  }

  getProducts(skus?: string[]): Product[] {
    return typeof skus === 'undefined' ?
      Object.keys( this.products )
        .map( sku => this.products[sku]) :
      Object.keys( this.products )
        .filter(sku => skus.includes( '' + sku ) )
        .map( sku =>  this.products[sku] );
  }

  getPoductsByCategory(category: Category) {
    return this.getProducts().filter(product => product.category.toString() === Category[category].toString());
  }

  getProductBySku(sku: string): Product {
    if (!this.inStock.isExistProduct(sku)) { throw new Error(`The SKU '${sku}' does not exist`); }
    return this.products[sku];
  }

  isAvailable(sku: string) {
    return this.inStock.isInStore(sku);
  }

}
