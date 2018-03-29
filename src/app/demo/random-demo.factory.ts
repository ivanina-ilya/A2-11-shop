
import {InjectionToken} from "@angular/core";

export const RandomStringFactory = new InjectionToken<string>('RandomFactory');

export function RandomDemoFactory(length: number){
  const k = 15;
  let pass = '';
  for(let i = 0; i < length/k; i++){
    pass += Math.random().toString(36).substring(2, k)
  }
  return () => pass.substr(0,length);
}
