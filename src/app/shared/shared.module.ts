import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseOverHighlightDirective} from '../directive/mouse-over-highlight.directive';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MouseOverHighlightDirective,
    OrderByPipe
  ],
  providers: [
  ],
  declarations: [
    MouseOverHighlightDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
