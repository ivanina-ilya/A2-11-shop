import {Directive, ElementRef, Renderer2, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[mouseOverHighlight]'
})
export class MouseOverHighlightDirective {
  @Input('mouseOverHighlight') color: string;

  constructor(
    private el: ElementRef,
    private render: Renderer2
    ) { }

  @HostListener('click')
  onClick() {
    console.log(">> D -> click.....");
  }

  @HostListener('mouseenter')
  myOnMouseEnter(): void {
    console.log(">> D -> mouse enter.....");
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
  myOnMouseLeave(): void {
    console.log(">> D -> mouse leave.....");
    this.highlight(null);
  }

  private highlight(color: string){
    this.render.setStyle(
      this.el.nativeElement,
      'background-color',
      typeof color === 'undefined' ? 'gray' : color)
  }

}
