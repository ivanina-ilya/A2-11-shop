import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseOverHighlightDirective} from "../directive/mouse-over-highlight.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MouseOverHighlightDirective
  ],
  providers: [
  ],
  declarations: [
    MouseOverHighlightDirective
  ]
})
export class SharedModule { }
