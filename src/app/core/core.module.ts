import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreService} from "./store.service";
import {ConfigOptionsService} from "../config/config-options.service";



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StoreService
  ],
  declarations: []
})
export class CoreModule { }
