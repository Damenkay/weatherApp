import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheit'
})
export class FahrenheitPipe implements PipeTransform {

  transform(temperature:number): number {
    return 1.8*(temperature-273)+32;
  }

}
