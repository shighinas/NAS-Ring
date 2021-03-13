import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifFormComponent } from './notif-form.component';

describe('NotifFormComponent', () => {
  let component: NotifFormComponent;
  let fixture: ComponentFixture<NotifFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
