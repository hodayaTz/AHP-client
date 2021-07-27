import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchedulingHolidayComponent } from './new-scheduling-holiday.component';

describe('NewSchedulingHolidayComponent', () => {
  let component: NewSchedulingHolidayComponent;
  let fixture: ComponentFixture<NewSchedulingHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSchedulingHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchedulingHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
