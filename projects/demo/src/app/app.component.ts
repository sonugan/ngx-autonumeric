import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxAutonumericOptions } from 'projects/ngx-autonumeric/src/lib/models/ngx-autonumeric-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: NgxAutonumericOptions = {}

  form = new FormGroup({
    number: new FormControl(3)
  });

  configsChange(config: NgxAutonumericOptions): void {
    this.config = config;
  }
}
