import { Component } from '@angular/core';
import { Product } from './model/Product';
import { Category } from './model/Category';
import { ProductStore } from './model/ProductStore';
import { ProductStoreSingleton } from 'app/model/ProductStoreSingleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';

  products: Product[] = [
    new Product(
      '81BF00EFRA', 'Lenovo IdeaPad 520-15', '15.6" IPS (1920x1080) Full HD, Intel Core i5-8250U', Category.Laptop),
    new Product(
      'FX553VE-DM406', 'Asus FX553VE', '15.6" (1920x1080) Full HD,  Intel Core i5-7300HQ, nVidia GeForce GTX 1050 T', Category.Laptop),
    new Product(
      'MPGT2RK/A', 'Apple iPad A1822 Wi-Fi 32GB', '9.7" IPS (2048x1536), Apple A9, iOS 10', Category.Tables)
  ];

  // inStock: ProductStoreSingleton = ProductStoreSingleton.Instance;
  // inStock.push('dd');

}
