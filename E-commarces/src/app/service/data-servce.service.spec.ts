import { TestBed } from '@angular/core/testing';

import { DataServceService } from './data-servce.service';

describe('DataServceService', () => {
  let service: DataServceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
