import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageService} from './storage.service';
import {LocalStorageService} from '../local-storage/local-storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StorageService,
    LocalStorageService
  ],
  declarations: []
})
export class CoreModule { }
