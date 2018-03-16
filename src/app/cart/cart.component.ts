import { Component, OnInit } from '@angular/core';
import { Product } from 'app/model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: 'app/cart/cart.component.html',
  styleUrls: ['app/cart/cart.component.css']
})
export class CartComponent implements OnInit {

  inCart: Product[];
  count: number;

  constructor() { }

  ngOnInit() {
    if (typeof this.inCart === 'undefined') {
      this.count = 0;
    } else {
      this.count = this.inCart.length;
    }
  }

}
