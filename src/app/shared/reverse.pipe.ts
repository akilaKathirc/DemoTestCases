import {
  IterableDiffer,
  IterableDiffers,
  Pipe,
  PipeTransform
} from '@angular/core';


@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  private cached: Array<any>;
  private differ: IterableDiffer<Array<any>>;

  constructor(private differs: IterableDiffers) {
    this.differ = this.differs.find([]).create(null);
  }

  transform(array: Array<any>): Array<any> {
    // TODO: Throw an error if `array` isn't an Array
    if (Array.isArray(array) === false) return [];

    const changes = this.differ.diff(array);

    if (changes) this.cached = array.slice().reverse();

    return this.cached;
  }

}
