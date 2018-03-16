import { Component, OnInit, Output, Input } from '@angular/core';

import {ProductStoreSingleton} from 'app/model/ProductStoreSingleton';
import { ProductsService } from 'app/product/products.service';
import {Product} from 'app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  isAvailable: boolean;
  protected inStock: ProductStoreSingleton = ProductStoreSingleton.Instance;

  constructor(protected productsService: ProductsService) { }

  ngOnInit() {
    this.isAvailable = this.inStock.isInStore(this.product.sku);
  }

  public isExists(): boolean {
    return typeof this.product !== 'undefined' && this.inStock.isExistProduct(this.product.sku);
  }

}
