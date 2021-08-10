import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenScedulingBasicComponent } from './open-sceduling-basic.component';

describe('OpenScedulingBasicComponent', () => {
  let component: OpenScedulingBasicComponent;
  let fixture: ComponentFixture<OpenScedulingBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenScedulingBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenScedulingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
