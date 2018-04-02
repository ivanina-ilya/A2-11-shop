
import {InjectionToken} from '@angular/core';

export const GeneratorServiceType = new InjectionToken<string>('GeneratorService');

export function GeneratorServiceFactory(length: number) {
  const k = 15;
  let pass = '';
  for (let i = 0; i < length / k; i++) {
    pass += Math.random().toString(36).substring(2, k);
  }
  return () => pass.substr(0, length);
}
