import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router, ActivatedRoute } from "@angular/router";

import { UserDetailComponent } from "./user-detail.component";
import { RouterStub } from "../shared/stub/routerStub.class";
import { ActivatedRouteStub } from "../shared/stub/activatedRouteStub.class";

describe("UserDetailComponent", () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call navigate method router class", () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");
    component.save();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(["users"]);
  });


  it("should call navigate method of router class", () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");
    fixture.detectChanges();
    let route:ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id: 0});

    

    expect(spy).toHaveBeenCalledWith(["not-found"]);
  });


});
