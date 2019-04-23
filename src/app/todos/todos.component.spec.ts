import { HttpClientModule } from '@angular/common/http';
import { TodosService } from './../shared/todos.service';
import { async, ComponentFixture,tick, TestBed, fakeAsync } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ TodosComponent ],
      providers:[TodosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should load todos from the server - Observable - async', async(() => {
    let service = TestBed.get(TodosService);
    spyOn(service, 'getTodods').and.returnValue(from([[1,2,3]]));

    fixture.detectChanges();
console.log("test -- case " + component.todos.length)
    fixture.whenStable().then(() => { 
      expect(component.todos.length).toBe(3);
    });
   
  }));

  fit('should load todos from the server - Observable - fakeAsync', fakeAsync(() => {
    let service = TestBed.get(TodosService);
    spyOn(service, 'getTodods').and.returnValue(from([[1,2,3]]));

    fixture.detectChanges();
console.log("test -- case " + component.todos.length)
tick();
      expect(component.todos.length).toBe(3);
   
  }));

  fit('should load todos from the server - Observable ', () => {
    let service = TestBed.get(TodosService);
    spyOn(service, 'getTodods').and.returnValue(from([[1,2,3]]));

    fixture.detectChanges();
console.log("test -- case " + component.todos.length)
      expect(component.todos.length).toBe(3);
   
  });

  xit('should load todos from the server - Promise', async(() => {
    let service = TestBed.get(TodosService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1,2,3]));

    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(component.todos.length).toBe(3);
    });
  }));
});
