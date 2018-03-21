import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareSectionComponent } from './compare-section.component';

describe('CompareSectionComponent', () => {
  let component: CompareSectionComponent;
  let fixture: ComponentFixture<CompareSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
