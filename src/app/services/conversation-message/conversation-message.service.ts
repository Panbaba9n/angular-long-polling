import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { ConversationMessage } from '../../shared/models/conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ConversationMessageService extends EntityCollectionServiceBase<ConversationMessage> {

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Message', elementsFactory);
  }
}
