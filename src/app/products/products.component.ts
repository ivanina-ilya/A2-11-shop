import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from '../model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProductList();
  }

  getProductList(): Product[] {
    return this.productsService.getProductList();
  }

}
