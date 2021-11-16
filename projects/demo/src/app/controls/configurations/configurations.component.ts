import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigModel } from '../../models/config-model';

import * as configsJson from '../../data/config-options.json';

import { NgxAutonumericOptions } from 'projects/ngx-autonumeric/src/lib/models/ngx-autonumeric-options';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  @Output() configsChange = new EventEmitter();

  configs: ConfigModel[] = (configsJson  as  any).default;
  constructor() { }

  ngOnInit(): void {
    this.configForms.valueChanges.subscribe(v => this.configsChange.emit(v));
  }

  configForms = new FormGroup(
    this.configs.reduce((acc, curr) => ({...acc, [curr.option]: new FormControl(curr.default)}), {})
  );
}
