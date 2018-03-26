import {Injectable} from '@angular/core';
import {StoreService} from "../core/store.service";
import {Product} from "../model/Product";

@Injectable()
export class ProductsService {
  constructor(protected storeService : StoreService ) { }

  private isInit: boolean = false;

  init(): void {
    if( this.isInit ) { new Error('The product list can be initialized once')}
    this.isInit = true;
    console.log('ProductsService init: start');
    // init and fill product list
    this.storeService.addProduct(
      new Product('SKU-P-1', 'Product one', 150.50, 'This is description for Product one'),
      5
    );
    this.storeService.addProduct(
      new Product('SKU-P-2', 'Product two', 20, 'This is description for Product two'),
      0
    );
    this.storeService.addProduct(
      new Product('SKU-P-3', 'Product three', 75.25, 'This is description for Product three'),
      2
    );
    this.storeService.addProduct(
      new Product('SKU-P-4', 'Product four', 99.90, 'This is description for Product four'),
      10
    );

  }

  getProductList(): Product[] {
    return this.storeService.getProducts();
  }

  inStock( sku: string): number {
    return this.storeService.inStock(sku);
  }


}
