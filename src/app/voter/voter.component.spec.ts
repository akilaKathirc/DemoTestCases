import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VoterComponent } from "./voter.component";
import { By } from "@angular/platform-browser";

describe("VoterComponent", () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
expect(component).toBeTruthy();
  });

  it("should render total votes", () => {
    component.othersVote = 10;
    component.myVote = 1;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".vote-count"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toBe("11");
  });


it('should highlight "glyphicon-menu-up" when myvote is set to 1', () => {
component.myVote = 1;
fixture.detectChanges();
let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
 expect(de.classes['highlighted']).toBeTruthy();

});

it('should increase totalvotes when upVote is clicked', () => {
  let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
  de.triggerEventHandler('click',null);
   expect(component.totalVotes).toBe(1);
  
  })


});
