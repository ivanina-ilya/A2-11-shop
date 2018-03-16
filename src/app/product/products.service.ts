import { Injectable } from '@angular/core';
import { Product } from 'app/model/Product';
import { Category } from 'app/model/Category';
import { ProductStoreSingleton } from 'app/model/ProductStoreSingleton';
import { isNumber } from 'util';

@Injectable()
export class ProductsService {

  private products: Product[];
  inStock: ProductStoreSingleton = ProductStoreSingleton.Instance;

  constructor() {
    this.products = [
      new Product(
        '81BF00EFRA',
        'Lenovo IdeaPad 520-15', '15.6" IPS (1920x1080) Full HD, Intel Core i5-8250U',
        Category.Laptop,
        655.99
      ),
      new Product(
        'FX553VE-DM406',
        'Asus FX553VE', '15.6" (1920x1080) Full HD,  Intel Core i5-7300HQ, nVidia GeForce GTX 1050 T',
        Category.Laptop,
        875.00
      ),
      new Product(
        'MPGT2RK/A',
        'Apple iPad A1822 Wi-Fi 32GB',
        '9.7" IPS (2048x1536), Apple A9, iOS 10',
        Category.Tables,
        999.99
      )
    ];

    this.inStock.push('81BF00EFRA', 1);
    this.inStock.push('FX553VE-DM406', 3);
    this.inStock.push('81BF00EFRA', 0);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getPoductsByCategory(category: Category) {
    return this.products.filter(product => product.category.toString() === Category[category].toString());
  }

}
