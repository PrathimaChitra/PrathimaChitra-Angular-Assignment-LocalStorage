import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputfield]'
})
export class InputfieldDirective {

  constructor( private elementref:ElementRef, private renderer: Renderer2 ) {
        this.setFontColor('black')
  }
  
  setFontColor(color: string) {
    this.renderer.setStyle(
      this.elementref.nativeElement,'color', color
    )
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setFontColor('blue');
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', ' pink');
  
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setFontColor('black');
    this.renderer.setStyle(this.elementref.nativeElement, 'background-color', 'silver');
  
  }
  
}
