import { Component, Inject, InjectionToken, OnInit, Optional} from '@angular/core';
import { ConfigOptionsService } from '../config/config-options.service';
import { GeneratorServiceType } from './generator-service.factory';
import {LocalStorageService} from '../local-storage/local-storage.service';

const ConstantsService = new InjectionToken<any>('ConstantsService');

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [
    {provide: ConstantsService, useValue: {App: 'TaskManager', Ver: '1.0'}},
    LocalStorageService
  ]

})
export class DemoComponent implements OnInit {
  private keyLocalStorageTestData = 'test-local-data';

  constructor(@Optional() private configOptionsService: ConfigOptionsService,
              @Optional() @Inject(GeneratorServiceType) private randomStringFactory: string,
              @Optional() @Inject(ConstantsService) private constantsService: any,
              private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    const  obj = {... this.configOptionsService.get()};
    obj.created = new Date();
    this.localStorageService.setItem(this.keyLocalStorageTestData, {...obj} );
  }

  getConfigKeys(): string[] {
    return this.configOptionsService.keys();
  }

  getConfig(): any {
    return this.configOptionsService.get();
  }

  getConfigByName(name: string): any {
    return this.configOptionsService.get(name);
  }

  getConstantsService(): any {
    return this.constantsService;
  }

  generatePass(): string {
    return this.randomStringFactory;
  }

  getTestLocalStorageData(): any {
    return this.localStorageService.getItem(this.keyLocalStorageTestData);
  }

  getDate(): Date {
    return new Date();
  }
}
