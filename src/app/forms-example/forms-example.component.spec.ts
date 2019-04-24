import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core'
import { FormBuilder } from '@angular/forms';
import { FormsExampleComponent } from './forms-example.component';
fdescribe('FormsExampleComponent', () => {
  let component: FormsExampleComponent;
  let fixture: ComponentFixture<FormsExampleComponent>;
  beforeEach(() => {
    const formBuilderStub = { group: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormsExampleComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderStub }]
    });
    fixture = TestBed.createComponent(FormsExampleComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('submitted defaults to: false', () => {
    expect(component.submitted).toEqual(false);
  });

  it("should make name control valid", () => {
    let control = component.registerForm.get("firstName");
    control.setValue("");
    expect(control.valid).toBeFalsy();
  });

  it("should make password and confirm password match each other", () => {
    let fcontrol = component.registerForm.get("password");
    let lcontrol = component.registerForm.get("password");
    fcontrol.setValue("abc");
    lcontrol.setValue("xyz");
    expect(lcontrol.valid).toBeFalsy();
  });


  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
});
