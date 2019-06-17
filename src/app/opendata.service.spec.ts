import { TestBed } from '@angular/core/testing';

import { OpendataService } from './opendata.service';

describe('OpendataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpendataService = TestBed.get(OpendataService);
    expect(service).toBeTruthy();
  });
});
