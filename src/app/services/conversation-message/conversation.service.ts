import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Conversation } from '../../shared/models/conversation.model';
import { Observable, interval, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConversationService extends EntityCollectionServiceBase<Conversation> {
  private readonly POLLING_INTERVAL = 10000;
  private stop$ = new Subject();

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Conversation', elementsFactory);
  }

  pollingConversations(): Observable<Conversation[]> {
    return interval(this.POLLING_INTERVAL)
      .pipe(
        switchMap(() => this.getAll()),
        takeUntil(this.stop$)
      );
  }

  stopPolling() {
    this.stop$.next();
  }
}
