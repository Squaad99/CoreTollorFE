import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCalculationComponent } from './product-calculation.component';

describe('ProductCalculationComponent', () => {
  let component: ProductCalculationComponent;
  let fixture: ComponentFixture<ProductCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
