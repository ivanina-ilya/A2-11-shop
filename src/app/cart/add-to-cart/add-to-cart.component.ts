import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input('product') product: Product;

  constructor(protected cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(): void {
    this.cartService.addToCart(this.product.sku, 1);
  }

  isActive(): boolean {
    return this.cartService.isProductAvailable( this.product.sku )
  }

}
