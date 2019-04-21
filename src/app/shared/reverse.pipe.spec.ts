import { IterableDiffers } from '@angular/core';
import {  inject } from '@angular/core/testing';

import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should create an instance', inject([ IterableDiffers ], (iterableDiffers: IterableDiffers) => {
    const pipe = new ReversePipe(iterableDiffers);

    expect(pipe).toBeTruthy();
  }));

  it('should reverse the array of type Array<number>', inject([ IterableDiffers ], (iterableDiffers: IterableDiffers) => {
    const array = [ 1, 2, 3 ];
    const pipe = new ReversePipe(iterableDiffers);

    expect(pipe.transform(array)).toEqual([ 3, 2, 1 ]);
  }));

  it('should reverse the array of type Array<string>', inject([ IterableDiffers ], (iterableDiffers: IterableDiffers) => {
    const array = [ 'apple', 'banana', 'clementine' ];
    const pipe = new ReversePipe(iterableDiffers);

    expect(pipe.transform(array)).toEqual([ 'clementine', 'banana', 'apple' ]);
  }));
});
