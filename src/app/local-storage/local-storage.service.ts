import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, data: string): void {
    localStorage.setItem(key, JSON.stringify(data) );
  }

  getItem(key: string): any {
    return JSON.parse( localStorage.getItem(key) );
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

}
