import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorPedido]'
})
export class ColorDirective {

  @Input() appColorPedido:string;

  constructor(public element:ElementRef) { }

  ngOnInit()
  {
    console.log(this.element.nativeElement);
    if(this.appColorPedido == "pendiente")
    {
      this.element.nativeElement.style.backgroundColor = "red";
    }
  }

}
