import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingaboutComponent } from './landingabout.component';

describe('LandingaboutComponent', () => {
  let component: LandingaboutComponent;
  let fixture: ComponentFixture<LandingaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
