import {Injectable} from '@angular/core';
import {StoreService} from "../core/store.service";
import {Product} from "../model/Product";

@Injectable()
export class ProductsService {
  constructor(protected storeService : StoreService ) { }

  getProductList(): Product[] {
    return this.storeService.getProducts();
  }

  inStock( sku: string): number {
    return this.storeService.inStock(sku);
  }




}
