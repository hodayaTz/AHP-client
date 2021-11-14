import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBeforeDeleteComponent } from './message-before-delete.component';

describe('MessageBeforeDeleteComponent', () => {
  let component: MessageBeforeDeleteComponent;
  let fixture: ComponentFixture<MessageBeforeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBeforeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBeforeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
