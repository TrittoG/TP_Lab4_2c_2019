import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == "")
    {
      return "Sin Nombre";
    }
    else
    {
      return value;
    }
  }

}
