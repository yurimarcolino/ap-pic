import { Directive, ElementRef, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

  @Output() brightness = '70%';

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ){}

  @HostListener('mouseover')
  darkenOn(){
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff(){
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}


