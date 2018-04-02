import { InjectionToken } from '@angular/core';

export const ConstantsService = new InjectionToken<any>('ConstantsService');

export const ConstantsServiceProvider = {
  provide: ConstantsService,
  useValue: {
    App: 'TaskManager',
    Ver: '1.0'
  }
};
