import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
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
