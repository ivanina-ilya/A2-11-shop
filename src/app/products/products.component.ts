import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from '../model/Product';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  pseudoErrorMessage = '';

  constructor(public productsService: ProductsService) { }

  // TODO: It will be moved into srvice
  getProducts: Promise<Product[]> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      const psevdoErrorRandomNum = Math.floor(Math.random() * 2);
      console.log('psevdoErrorRandomNum', psevdoErrorRandomNum);
      if (psevdoErrorRandomNum === 0) {
        this.pseudoErrorMessage = 'THis is pseudo error buy rundom number "0" of [0, 1, 2] (see to console). Could you refresh page?';
        reject( [] );
      } else {
        resolve(this.productsService.getProducts());
      }
    }
      , 2000);
  }).catch(error => error);

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  getProductList(): Product[] {
    return this.productsService.getProducts();
  }

}
