import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailPopupComponent } from './customer-detail-popup.component';

describe('CustomerDetailPopupComponent', () => {
  let component: CustomerDetailPopupComponent;
  let fixture: ComponentFixture<CustomerDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
