import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraExpensesCalculatorComponent } from './extra-expenses-calculator.component';

describe('ExtraExpensesCalculatorComponent', () => {
  let component: ExtraExpensesCalculatorComponent;
  let fixture: ComponentFixture<ExtraExpensesCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraExpensesCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraExpensesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
