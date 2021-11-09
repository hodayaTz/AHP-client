import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerPlacementApprovalComponent } from './volunteer-placement-approval.component';

describe('VolunteerPlacementApprovalComponent', () => {
  let component: VolunteerPlacementApprovalComponent;
  let fixture: ComponentFixture<VolunteerPlacementApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerPlacementApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerPlacementApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
