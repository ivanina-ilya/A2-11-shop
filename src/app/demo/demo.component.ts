import { Component, Inject, InjectionToken, OnInit, Optional} from '@angular/core';
import { ConfigOptionsService } from '../config/config-options.service';
import { GeneratorServiceType } from './generator-service.factory';


// TODO: Why?? If we exported from module - do not work
// import { ConstantsService } from './demo.module';
const ConstantsService = new InjectionToken<any>('ConstantsService');

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [
    {provide: ConstantsService, useValue: {App: 'TaskManager', Ver: '1.0'}},
  ]

})
export class DemoComponent implements OnInit {
  constructor(@Optional() private configOptionsService: ConfigOptionsService,
              @Optional() @Inject(GeneratorServiceType) private randomStringFactory: string,
              @Optional() @Inject(ConstantsService) private constantsService: any
  ) {}

  ngOnInit() {
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
}
