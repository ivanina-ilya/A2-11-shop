import {Counter} from '../model/Counter';
import {Product} from '../model/Product';

export class DBObject {
  private static _instance: DBObject;
  protected constructor() { }

  public static get Instance(): DBObject {
    return this._instance || (this._instance = new this());
  }

  inStock: Counter[] = [];
  products: Product[] = [];
}
