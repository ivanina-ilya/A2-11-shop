import { Component } from '@angular/core';
import { Product } from './model/Product';
import { ProductStore } from './model/ProductStore';
import { ProductStoreSingleton } from 'app/model/ProductStoreSingleton';
import { ProductsService } from './service/products.service';
import { Category } from 'app/model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsService: ProductsService;
  title = 'Store';
  prodcts: Product[];
  categories: Category[];

  constructor() {
    this.productsService = new ProductsService();
    this.prodcts = this.productsService.getProducts();
    this.categories = Object.keys(Category)
      .filter(c => parseInt(c, 10) >= 0)
      .map(c => Category[c]);
  }

  getPoductsByCategory(category: Category) {
    return this.productsService.getPoductsByCategory(category);
  }
}
