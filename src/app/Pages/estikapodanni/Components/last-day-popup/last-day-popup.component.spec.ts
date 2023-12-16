import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDayPopupComponent } from './last-day-popup.component';

describe('LastDayPopupComponent', () => {
  let component: LastDayPopupComponent;
  let fixture: ComponentFixture<LastDayPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastDayPopupComponent]
    });
    fixture = TestBed.createComponent(LastDayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
