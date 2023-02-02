import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEventsComponent } from './binding-events.component';

describe('BindingEventsComponent', () => {
  let component: BindingEventsComponent;
  let fixture: ComponentFixture<BindingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
