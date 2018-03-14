import { Component, OnInit } from '@angular/core';

import {ProductStoreSingleton} from 'app/model/ProductStoreSingleton';
import {Product} from 'app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  protected _product: Product;
  protected _price: number;
  protected _isAvailable: boolean;
  private inStock: ProductStoreSingleton = ProductStoreSingleton.Instance;

  constructor() { }

  ngOnInit() {
  }

  init(product: Product, price: number, count: number): void {
    this._product = product;
    this._price = price;
    this.inStock.push(product.sku, count);
  }

  public get isAvailable(): boolean {
    return this.inStock.isInStore(this._product.sku);
  }

  public get price(): number {
    return this._price;
  }

  public get product(): Product {
    return this._product;
  }

  public isExists(): boolean {
    return typeof this._product !== 'undefined' && this.inStock.isExistProduct(this._product.sku);
  }

}
