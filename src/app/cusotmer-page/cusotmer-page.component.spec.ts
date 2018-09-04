import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusotmerPageComponent } from './cusotmer-page.component';

describe('CusotmerPageComponent', () => {
  let component: CusotmerPageComponent;
  let fixture: ComponentFixture<CusotmerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusotmerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusotmerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
