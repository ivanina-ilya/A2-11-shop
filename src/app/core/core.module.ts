import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreService} from "./store.service";

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
