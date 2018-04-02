import { Injectable } from '@angular/core';

const config = {
  "id": 101,
  "email": "tes-email@test.com",
  "title": "Test title",
  "address": {
    "country": "UK",
    "city": "UK",
    "street": "Baker street"
  }
}

@Injectable()
export class ConfigOptionsService {
  private config: any;
  constructor() {
    this.config = config;
  }

  get(name?: string): any {
    if (typeof name === 'undefined') { return this.config; }
    return this.config[name];
  }

  keys(): string[] {
    return Object.keys( this.config );
  }

}
