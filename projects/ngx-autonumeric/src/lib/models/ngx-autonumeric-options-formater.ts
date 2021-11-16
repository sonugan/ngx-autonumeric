import { NgxAutonumericOptions } from "./ngx-autonumeric-options";

export class NgxAutonumericOptionsFormater {
    format(options: NgxAutonumericOptions): NgxAutonumericOptions {
        if (options.decimalPlaces === null || options.decimalPlaces === undefined || options.decimalPlaces < 0) {
            options.decimalPlaces = 0;
        }
        return options;
    }
}