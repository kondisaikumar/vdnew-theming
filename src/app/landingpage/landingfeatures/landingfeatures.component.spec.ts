import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingfeaturesComponent } from './landingfeatures.component';

describe('LandingfeaturesComponent', () => {
  let component: LandingfeaturesComponent;
  let fixture: ComponentFixture<LandingfeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingfeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
