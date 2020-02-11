import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingregisterComponent } from './landingregister.component';

describe('LandingregisterComponent', () => {
  let component: LandingregisterComponent;
  let fixture: ComponentFixture<LandingregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
