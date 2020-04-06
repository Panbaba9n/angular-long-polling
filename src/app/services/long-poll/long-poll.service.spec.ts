import { TestBed } from '@angular/core/testing';

import { LongPollService } from './long-poll.service';

describe('LongPollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LongPollService = TestBed.get(LongPollService);
    expect(service).toBeTruthy();
  });
});
