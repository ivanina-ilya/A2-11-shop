import { Component, OnInit } from '@angular/core';

import { Product } from 'app/model/Product';
import { ProductStore } from 'app/model/ProductStore';
import { ProductStoreSingleton } from 'app/model/ProductStoreSingleton';
import { ProductsService } from 'app/product/products.service';
import { Category } from 'app/model/Category';

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
