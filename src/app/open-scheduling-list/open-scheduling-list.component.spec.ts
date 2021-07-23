import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSchedulingListComponent } from './open-scheduling-list.component';

describe('OpenSchedulingListComponent', () => {
  let component: OpenSchedulingListComponent;
  let fixture: ComponentFixture<OpenSchedulingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSchedulingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSchedulingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
