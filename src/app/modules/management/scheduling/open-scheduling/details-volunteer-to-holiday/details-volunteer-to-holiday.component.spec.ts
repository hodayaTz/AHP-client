import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVolunteerToHolidayComponent } from './details-volunteer-to-holiday.component';

describe('DetailsVolunteerToHolidayComponent', () => {
  let component: DetailsVolunteerToHolidayComponent;
  let fixture: ComponentFixture<DetailsVolunteerToHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVolunteerToHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVolunteerToHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
