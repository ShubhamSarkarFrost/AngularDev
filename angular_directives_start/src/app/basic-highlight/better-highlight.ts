import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlight implements OnInit {
  @Input() defaultColor:string = 'blue'
  @Input() highlightColor:string = 'transparent'
   @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elref:ElementRef , private renderer: Renderer2) {

  }
  ngOnInit() {
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
    // this.backgroundColor = 'blue'
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent');
    // this.backgroundColor = 'transparent'
    this.backgroundColor = this.highlightColor
  }
}
