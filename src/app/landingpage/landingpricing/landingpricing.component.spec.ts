import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpricingComponent } from './landingpricing.component';

describe('LandingpricingComponent', () => {
  let component: LandingpricingComponent;
  let fixture: ComponentFixture<LandingpricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
