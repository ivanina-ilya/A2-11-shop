import { Injectable } from '@angular/core';
declare let require: any;
const config = require('./config.json');

@Injectable()
export class ConfigOptionsService {
  private config: any;
  constructor() {
    this.config = config;
  }

  get(name?: string): any {
    if(typeof name === 'undefined') { return this.config;}
    return this.config[name];
  }

  keys(): string[] {
    return Object.keys( this.config );
  }

}
