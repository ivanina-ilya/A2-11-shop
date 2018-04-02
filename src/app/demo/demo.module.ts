import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from '../config/config-options.service';
import { GeneratorServiceType, GeneratorServiceFactory } from './generator-service.factory';
import { DemoComponent } from './demo.component';
import { DemoDirective } from './demo.directive';
import { SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DemoComponent
  ],
  declarations: [
    DemoComponent,
    DemoDirective
  ],
  providers: [
    ConfigOptionsService,

    {provide: GeneratorServiceType, useFactory: GeneratorServiceFactory(8)}
  ]
})
export class DemoModule { }
