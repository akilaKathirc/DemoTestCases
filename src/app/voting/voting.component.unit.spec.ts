import { TodosService } from "./../shared/todos.service";

import { VotingComponent } from "./voting.component";
import { FormBuilder } from "@angular/forms";
import { from, empty, throwError } from "rxjs";

describe("VotingComponent", () => {
  let component: VotingComponent;
  let service: TodosService;

   beforeEach(() => {
    service = new TodosService(null);
    component = new VotingComponent(new FormBuilder(), service);
  });
  
  
  it("should contain name control", () => {
    expect(component.fg.contains("name")).toBeTruthy();
  });

  it("should return observable when todos service is called", () => {
    spyOn(service, "getTodods").and.callFake(() => {
      return from([[1, 2, 3]]);
    });
    component.ngOnInit();
    expect(component.todosItem.length).toBe(3);
  });

  it("should make name control valid", () => {
    let control = component.fg.get("name");
    control.setValue("");
    expect(control.valid).toBeFalsy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set totalVote to 1 on UpVote", () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it("should set totalVote to -1 on downVote", () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });



  it("should call service when add method is called", () => {
    let spy = spyOn(service, "addTodos").and.callFake(() => {
      return empty();
    });
    component.addTodos();
    expect(spy).toHaveBeenCalled();
  });

  it("should return todo item when add method is called", () => {
    let todo = { id: 1 };
    spyOn(service, "addTodos").and.returnValue(from([todo]));
    component.addTodos();

    expect(component.todosItem.indexOf(todo)).toBeGreaterThan(-1);
  });

  it("should add error message to message when add method returns error", () => {
    let error = 'Error occurs';
    spyOn(service, "addTodos").and.returnValue(throwError(error));

    component.addTodos();
    expect(component.message).toBe(error);
  });

  it("should call deleteTodo of service when deleteTodo is called with true", () => {
    spyOn(window, "confirm").and.returnValue(true);
    let spy = spyOn(service, "deleteTodo").and.returnValue(from('1'));

    component.deleteTodo(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it("should not call deleteTodo of service when deleteTodo is called with false", () => {
    spyOn(window, "confirm").and.returnValue(false);
    let spy = spyOn(service, "deleteTodo").and.returnValue(from('1'));

    component.deleteTodo(1);
    expect(spy).not.toHaveBeenCalled();
  });

});