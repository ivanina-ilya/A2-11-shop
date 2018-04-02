import {Directive, ElementRef, Renderer2, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appMouseOverHighlight]'
})
export class MouseOverHighlightDirective {
  @Input() color: string;

  constructor(
    private el: ElementRef,
    private render: Renderer2
    ) { }

  /*@HostListener('click')
  onClick() {
    console.log(">> D -> click.....");
  }*/

  @HostListener('mouseenter')
  myOnMouseEnter(): void {
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
  myOnMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.render.setStyle(
      this.el.nativeElement,
      'background-color',
      typeof color === 'undefined' ? 'gray' : color);
  }

}
