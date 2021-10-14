import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingActualComponent } from './scheduling-actual.component';

describe('SchedulingActualComponent', () => {
  let component: SchedulingActualComponent;
  let fixture: ComponentFixture<SchedulingActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
