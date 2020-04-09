import { TestBed } from '@angular/core/testing';

import { ConversationMessageService } from './conversation-message.service';

describe('ConversationMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversationMessageService = TestBed.get(ConversationMessageService);
    expect(service).toBeTruthy();
  });
});
