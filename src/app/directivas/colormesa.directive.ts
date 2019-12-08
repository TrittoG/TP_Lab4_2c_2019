
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPuntuacion]'
})
export class ColorMesaDirective {

  @Input() appPuntuacion:any;

  constructor(public element:ElementRef) { }

  ngOnInit()
  {
    console.log(this.appPuntuacion);
    if(this.appPuntuacion < 4)
    {
      this.element.nativeElement.style.backgroundColor = "red";
    }
    else if(this.appPuntuacion > 8)
    {
      this.element.nativeElement.style.backgroundColor = "green";
    }
  }

}
