import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCalcutatorComponent } from './rent-calcutator.component';

describe('RentCalcutatorComponent', () => {
  let component: RentCalcutatorComponent;
  let fixture: ComponentFixture<RentCalcutatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentCalcutatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCalcutatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
