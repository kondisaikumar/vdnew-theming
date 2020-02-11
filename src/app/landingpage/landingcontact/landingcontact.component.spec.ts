import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingcontactComponent } from './landingcontact.component';

describe('LandingcontactComponent', () => {
  let component: LandingcontactComponent;
  let fixture: ComponentFixture<LandingcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
