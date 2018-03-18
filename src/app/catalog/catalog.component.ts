import { Component, OnInit } from '@angular/core';

import { Product } from '../model/Product';
import { ProductStore } from '../model/ProductStore';
import { ProductStoreSingleton } from '../model/ProductStoreSingleton';
import { ProductsService } from '../product/products.service';
import { Category } from '../model/Category';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  prodcts: Product[];
  categories: Category[];

  constructor(protected productsService: ProductsService) { }

  ngOnInit() {
    this.prodcts = this.productsService.getProducts();
    this.categories = Object.keys(Category)
      .filter(c => parseInt(c, 10) >= 0)
      .map(c => Category[c]);
  }

  getPoductsByCategory(category: Category) {
    return this.productsService.getPoductsByCategory(category);
  }

}
