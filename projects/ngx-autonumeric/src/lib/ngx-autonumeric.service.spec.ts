import { TestBed } from '@angular/core/testing';

import { NgxAutonumericService } from './ngx-autonumeric.service';

describe('NgxAutonumericService', () => {
  let service: NgxAutonumericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAutonumericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
