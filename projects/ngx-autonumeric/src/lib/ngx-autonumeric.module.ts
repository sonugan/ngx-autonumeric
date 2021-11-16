import { NgModule } from '@angular/core';
import { NgxAutonumericComponent } from './ngx-autonumeric.component';
import { AutonumericDirective } from './directives/autonumeric.directive';
import { IntegerAutonumericDirective } from './directives/integer-autonumeric.directive';



@NgModule({
  declarations: [
    NgxAutonumericComponent,
    AutonumericDirective,
    IntegerAutonumericDirective
  ],
  imports: [
  ],
  exports: [
    AutonumericDirective,
    IntegerAutonumericDirective,
    NgxAutonumericComponent
  ]
})
export class NgxAutonumericModule { }
