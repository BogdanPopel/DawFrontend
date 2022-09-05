import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appRowHover]'
})
export class RowHoverDirective {

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
