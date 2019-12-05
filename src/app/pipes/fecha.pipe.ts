import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let newValue = value.substring(0,value.length - 10);
    return newValue;
  }

}
