import {Counter} from '../model/Counter';
import {Product} from '../model/Product';

export class LocalStorage {
  private static _instance: LocalStorage;
  protected constructor() { }

  public static get Instance(): LocalStorage {
    return this._instance || (this._instance = new this());
  }

  inStock: Counter[] = [];
  products: Product[] = [];
}
