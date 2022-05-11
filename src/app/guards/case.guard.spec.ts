import { TestBed } from '@angular/core/testing';

import { CaseGuard } from './case.guard';

describe('CaseGuard', () => {
  let guard: CaseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
