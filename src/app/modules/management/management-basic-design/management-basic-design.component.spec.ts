import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBasicDesignComponent } from './management-basic-design.component';

describe('ManagementBasicDesignComponent', () => {
  let component: ManagementBasicDesignComponent;
  let fixture: ComponentFixture<ManagementBasicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBasicDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementBasicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
