import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFontSizeIncrease]'
})
export class DemoDirective {
  @Input() size: number;
  private maxSize = 28;
  @HostBinding('style.font-size')
  private currentSize = 14;

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }



  @HostListener('click')
  onClick() {
    console.log({'@Input size': this.size, 'maxSize': this.maxSize, 'currentSize': this.currentSize});
    if (this.currentSize > this.maxSize) { this.currentSize = this.size; }
    this.render.setStyle(
      this.el.nativeElement,
      'font-size',
      this.currentSize++ + 'px');
  }

}
