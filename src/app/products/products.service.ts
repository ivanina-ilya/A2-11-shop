import {Injectable} from '@angular/core';
import {LocalStorageService} from '../core/local-storage.service';
import {Product} from '../model/Product';

@Injectable()
export class ProductsService {
  constructor(protected storeService: LocalStorageService ) { }

  getProductList(): Product[] {
    return this.storeService.getProducts();
  }

  inStock( sku: string): number {
    return this.storeService.inStock(sku);
  }




}
