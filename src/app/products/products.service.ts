import {Injectable} from '@angular/core';
import {StorageService} from '../core/storage.service';
import {Product} from '../model/Product';

@Injectable()
export class ProductsService {
  constructor(protected storeService: StorageService ) { }

  getProductList(): Product[] {
    return this.storeService.getProducts();
  }

  inStock( sku: string): number {
    return this.storeService.inStock(sku);
  }




}
