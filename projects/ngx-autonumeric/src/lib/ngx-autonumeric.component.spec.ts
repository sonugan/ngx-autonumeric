import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAutonumericComponent } from './ngx-autonumeric.component';

describe('NgxAutonumericComponent', () => {
  let component: NgxAutonumericComponent;
  let fixture: ComponentFixture<NgxAutonumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAutonumericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAutonumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
