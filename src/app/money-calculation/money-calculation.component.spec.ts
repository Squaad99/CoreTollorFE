import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCalculationComponent } from './money-calculation.component';

describe('MoneyCalculationComponent', () => {
  let component: MoneyCalculationComponent;
  let fixture: ComponentFixture<MoneyCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
