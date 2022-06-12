import { TestBed } from '@angular/core/testing';

import { GuardDemoGuard } from './guard-demo.guard';

describe('GuardDemoGuard', () => {
  let guard: GuardDemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
