import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent
      ],
      schemas:[NO_ERRORS_SCHEMA] // to ignore any elements that angular cannot recognize
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testingApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testingApp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testingApp!');
  });

  it('should have router outlet directive', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(compiled).not.toBeNull();
  });

  it('should have router link directive with todos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let debugElement = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElement.findIndex(de => de.properties['href']=== '/todos');
    
    expect(index).toBeGreaterThan(-1);
  });
  


});
