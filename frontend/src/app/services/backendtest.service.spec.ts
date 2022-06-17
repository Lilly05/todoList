import { TestBed } from '@angular/core/testing';

import { BackendtestService } from './backendtest.service';

describe('BackendtestService', () => {
  let service: BackendtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
