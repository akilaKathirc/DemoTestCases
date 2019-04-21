import { MeanPipe } from './mean.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  template: '<div> {{ values | mean }}</div>'
})
export class MeanPipeHostComponent {
  values: number[];
}

describe('MeanPipe inside a Component', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [MeanPipe, MeanPipeHostComponent]
      })
      .compileComponents();
  }));

  let fixture: ComponentFixture<MeanPipeHostComponent>;
  let debugElement: DebugElement;

  let component: MeanPipeHostComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanPipeHostComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should display 1', () => {
    component.values = [1, 1];
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('1');
  });

  it('should display 0', () => {
    component.values = [1, -1];
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('0');
  });

  it('should display nothing', () => {
    component.values = [];
    fixture.detectChanges();

    const div: HTMLDivElement = debugElement
      .query(By.css('div'))
      .nativeElement;

    expect(div.textContent.trim()).toEqual('');
  });
});