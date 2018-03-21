import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuvSectionComponent } from './puv-section.component';

describe('PuvSectionComponent', () => {
  let component: PuvSectionComponent;
  let fixture: ComponentFixture<PuvSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuvSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuvSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
