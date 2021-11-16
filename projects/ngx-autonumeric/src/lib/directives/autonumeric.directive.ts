import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as AutoNumeric from 'autonumeric';
import { NgxAutonumericOptions } from '../models/ngx-autonumeric-options';
import { NgxAutonumericOptionsFormater } from '../models/ngx-autonumeric-options-formater';

@Directive({
  selector: '[autonumeric]'
})
export class AutonumericDirective implements AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {
  @Input() config: NgxAutonumericOptions = {};
  
  onChangeFn: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private elm: ElementRef) { 
    this.instance = null;
    this.formatter = new NgxAutonumericOptionsFormater();
  }
  
  private instance: AutoNumeric | null; 
  private formatter: NgxAutonumericOptionsFormater;

  ngOnChanges(changes: SimpleChanges): void {
    this.instance?.update(this.formatter.format(this.config));
  }

  ngOnDestroy(): void {
    try {
      this.instance?.remove();
    } catch(e) {
      console.error(e);
    }
  }

  ngAfterViewInit(): void {
    this.instance = new AutoNumeric(this.elm.nativeElement, null, this.config);
  }

  writeValue(value: any): void {
    this.instance?.set(value);
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
