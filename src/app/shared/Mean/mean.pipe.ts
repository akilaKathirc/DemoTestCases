import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mean'
})
export class MeanPipe implements PipeTransform {

  transform(value: number[]): number {
    if (!Array.isArray(value)) {
      return value;
    }
    if (value.length === 0) {
      return undefined;
    }
    const sum = value.reduce((n: number, m: number) => n + m, 0);
    return  sum / value.length;
  }

}
