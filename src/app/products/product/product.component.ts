import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../model/Product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  inStock(): number {
    return this.productsService.inStock(this.product.sku);
  }

}
