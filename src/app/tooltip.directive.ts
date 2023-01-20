import {  ApplicationRef,ComponentRef, Directive, ElementRef ,EmbeddedViewRef,HostListener,Injector,Input,OnInit,Renderer2} from '@angular/core';
import { RegComponent } from './reg/reg.component';
@Directive({
  selector: '[appTooltip]'
})
 export class TooltipDirective   {
  

//   // constructor( private tooltip:ElementRef, private renderer2: Renderer2) { 
//   //tooltip.nativeElement.style.background = 'red';
//  //}
 
//  @Input() tooltip = '';

//  private componentRef!: ComponentRef<any>;

//  constructor(
//  private elementRef: ElementRef,
//  private appRef: ApplicationRef, 
//  private componentFactoryResolver: ComponentFactoryResolver,
//  private injector: Injector) {
//  }
//  @HostListener('mouseenter')
//   onMouseEnter(): void {
//     if (this.componentRef === null) {
//         const componentFactory =
//               this.componentFactoryResolver.resolveComponentFactory(
//                 RegComponent);
//         this.componentRef = componentFactory.create(this.injector);
//         this.appRef.attachView(this.componentRef.hostView);
//         const domElem = 
//               (this.componentRef.hostView as EmbeddedViewRef<any>)
//               .rootNodes[0] as HTMLElement;       
//         document.body.appendChild(domElem);
//         this.setTooltipComponentProperties();
//     }
//   }
//   private setTooltipComponentProperties() {
//     if (this.componentRef !== null) {
//       this.componentRef.instance.tooltip = this.tooltip;
//       const {left, right, bottom} = 		  	
//             this.elementRef.nativeElement.getBoundingClientRect();
//       this.componentRef.instance.left = (right - left) / 2 + left;
//       this.componentRef.instance.top = bottom;
//     }
  
// }
// }



//tooltip.nativeElement.style.background = 'red';
 


//  export class TooltipDirective implements OnInit{

//   constructor( private tooltip:ElementRef, private renderer2: Renderer2) { 
//   }
 
// ngOInit(): void {
//   this.renderer2.setAttribute(this.tooltip.nativeElement,'title','Firstname');

// }

  }


