import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSettlementToHolidayComponent } from './details-settlement-to-holiday.component';

describe('DetailsSettlementToHolidayComponent', () => {
  let component: DetailsSettlementToHolidayComponent;
  let fixture: ComponentFixture<DetailsSettlementToHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSettlementToHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSettlementToHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
