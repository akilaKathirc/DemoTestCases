import { TodosService } from "./../shared/todos.service";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { from, empty, throwError } from "rxjs";

import { VotingComponent } from "./voting.component";
import { FormBuilder } from "@angular/forms";

describe("VotingComponent", () => {
  let component: VotingComponent;
   let fixture: ComponentFixture<VotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ VotingComponent ],
       providers: [
        FormBuilder,
        TodosService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
     fixture = TestBed.createComponent(VotingComponent);
      component = fixture.componentInstance;
   
  });

  
  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return observable when todos service is called", () => {
    let service = TestBed.get(TodosService);
    spyOn(service, "getTodods").and.callFake(() => { return from([[1, 2, 3]]); });

    fixture.detectChanges(); 
    
    expect(component.todosItem.length).toBe(3);
  });


});
;