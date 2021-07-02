import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationVolunteersComponent } from './registration-volunteers.component';

describe('RegistrationVolunteersComponent', () => {
  let component: RegistrationVolunteersComponent;
  let fixture: ComponentFixture<RegistrationVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationVolunteersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
