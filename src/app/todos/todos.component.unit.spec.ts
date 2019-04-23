import { from } from 'rxjs';
import { TodosService } from './../shared/todos.service';
import { TodosComponent } from './todos.component';


describe('TodosComponent', () => {
    let component: TodosComponent;
    let service: TodosService;
  
    beforeEach(() => {
        service = new TodosService(null);
     component = new TodosComponent(service);
    });

    xit('should load todos from the server - Observable', () => {
        spyOn(service, 'getTodods').and.returnValue(from([[1,2,3]]));
        component.ngOnInit();
            expect(component.todos.length).toBe(3);
       
      });

});