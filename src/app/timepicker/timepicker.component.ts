import { Component, ViewEncapsulation } from '@angular/core';
import { IgxLayoutDirective, IgxTimePickerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimepickerComponent {
  public date: Date = new Date(Date.now());
}
