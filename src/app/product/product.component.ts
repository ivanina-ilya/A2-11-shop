import { Component, OnInit, Output, Input } from '@angular/core';

import {ProductStoreSingleton} from '../model/ProductStoreSingleton';
import { ProductsService } from '../product/products.service';
import {Product} from '../model/Product';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() isShortDisplay = false;
  protected inStock: ProductStoreSingleton = ProductStoreSingleton.Instance;

  constructor(
    protected productsService: ProductsService,
    protected cartService: CartService
  ) { }

  ngOnInit() {
  }

  isExists(): boolean {
    return typeof this.product !== 'undefined' && this.inStock.isExistProduct(this.product.sku);
  }

  buy(sky: string) {
    this.cartService.addToCart(sky, 1);
  }

  isAvailable() {
    return this.productsService.isAvailable(this.product.sku);
  }

  available() {
    return this.inStock.getInStoreCount(this.product.sku);
  }

}
