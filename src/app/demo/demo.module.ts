import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigOptionsService} from "../config/config-options.service";
import {RandomDemoFactory, RandomStringFactory} from "./random-demo.factory";
import {DemoComponent} from "./demo.component";
import { DemoDirective } from './demo.directive';
import {SharedModule} from "../shared/shared.module";


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

    {provide: RandomStringFactory, useFactory: RandomDemoFactory(8)}
  ]
})
export class DemoModule { }
