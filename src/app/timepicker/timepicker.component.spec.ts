import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';
import { TimepickerComponent } from './timepicker.component';

describe('TimepickerComponent', () => {
  let component: TimepickerComponent;
  let fixture: ComponentFixture<TimepickerComponent>;
  const date: Date = new Date();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
	  imports: [IgxTimePickerModule, NoopAnimationsModule, TimepickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('time is correct', () => {
    expect(component.date.getHours()).toBe(hours);
    expect(component.date.getMinutes()).toBe(minutes);
  });
});
