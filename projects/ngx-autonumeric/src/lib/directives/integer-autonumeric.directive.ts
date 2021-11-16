import { Directive, ElementRef, Input } from '@angular/core';
import { NgxAutonumericOptions } from '../models/ngx-autonumeric-options';
import { AutonumericDirective } from './autonumeric.directive';

@Directive({
  selector: '[integerAutonumeric]'
})
export class IntegerAutonumericDirective extends AutonumericDirective {
  config: NgxAutonumericOptions = { allowDecimalPadding: false, decimalPlaces: 0 };
  constructor(elm: ElementRef) {
    super(elm);
  }

}
