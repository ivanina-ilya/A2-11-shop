import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/Product';
import { CartService } from '../cart/cart.service';

@Pipe({
  name: 'appOrderBy'
})
export class OrderByPipe implements PipeTransform {

  constructor(private cartService: CartService) { }
  /**
   * Sort list of Products
   * @param value array of Products
   * @param fieldName name of Product property or 'inCart'
   * @param order ASC = true, DESC = false
   */
  transform(value: Product[], fieldName: string, order = true): any {
    if (value === null) { return []; }
    return value.sort((a, b) => {
      let compare = 0;
      if (fieldName === 'inCart') {
        const _a = this.cartService.inCart(a.sku);
        const _b = this.cartService.inCart(b.sku);
        compare = _a - _b < 0 ? -1 : _a - _b > 0 ? 1 : 0;
      } else if ( typeof a[fieldName] === 'string') {
        compare = a[fieldName].localeCompare(b[fieldName]);
      } else if ( typeof a[fieldName] === 'number') {
        compare = a[fieldName] - b[fieldName] < 0 ? -1 : a[fieldName] - b[fieldName] > 0 ? 1 : 0;
      }
      if (!order) {compare *= -1; }
      return compare;
    });
  }

}
