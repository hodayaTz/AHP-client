import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalSettlementsComponent } from './optional-settlements.component';

describe('OptionalSettlementsComponent', () => {
  let component: OptionalSettlementsComponent;
  let fixture: ComponentFixture<OptionalSettlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalSettlementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
