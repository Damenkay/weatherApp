import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {
  kelvinConstant:number = 273.15
  transform(temperature:number): number {
    return temperature - this.kelvinConstant ;
  }

}
