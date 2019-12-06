
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorMesa]'
})
export class ColorDirective {

  @Input() appColorMesa:string;

  constructor(public element:ElementRef) { }

  ngOnInit()
  {
    console.log(this.element.nativeElement);
    if(this.appColor != "cerrada")
    {
      this.element.nativeElement.style.backgroundColor = "red";
    }
  }

}
