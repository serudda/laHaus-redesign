import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorkSectionComponent } from './how-it-work-section.component';

describe('HowItWorkSectionComponent', () => {
  let component: HowItWorkSectionComponent;
  let fixture: ComponentFixture<HowItWorkSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorkSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
