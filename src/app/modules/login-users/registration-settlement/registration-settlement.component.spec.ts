import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSettlementComponent } from './registration-settlement.component';

describe('RegistrationSettlementComponent', () => {
  let component: RegistrationSettlementComponent;
  let fixture: ComponentFixture<RegistrationSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationSettlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
