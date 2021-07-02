import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementLogInComponent } from './management-log-in.component';

describe('ManagementLogInComponent', () => {
  let component: ManagementLogInComponent;
  let fixture: ComponentFixture<ManagementLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
