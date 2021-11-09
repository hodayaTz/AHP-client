import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionSchedulingComponent } from './completion-scheduling.component';

describe('CompletionSchedulingComponent', () => {
  let component: CompletionSchedulingComponent;
  let fixture: ComponentFixture<CompletionSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionSchedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
