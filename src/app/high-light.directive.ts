import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnChanges{

  defaultColor =  'yellow'; 
  @Input('highlight') bgColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }

}
