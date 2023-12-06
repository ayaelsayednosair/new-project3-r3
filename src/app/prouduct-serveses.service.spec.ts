import { TestBed } from '@angular/core/testing';

import { ProuductServesesService } from './prouduct-serveses.service';

describe('ProuductServesesService', () => {
  let service: ProuductServesesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProuductServesesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
