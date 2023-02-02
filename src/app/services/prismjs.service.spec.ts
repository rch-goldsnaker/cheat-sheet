import { TestBed } from '@angular/core/testing';

import { PrismjsService } from './prismjs.service';

describe('PrismjsService', () => {
  let service: PrismjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
