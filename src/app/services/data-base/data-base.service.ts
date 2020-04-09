import { Injectable } from '@angular/core';
import { InMemoryDbService, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { ConversationMessage, Conversation } from '../../shared/models/conversation.model';
import { environment } from '../../../environments/environment';


export const dataBaseConfig: InMemoryBackendConfigArgs = {
  delay: environment.inMemoryDataBase.delay,
  passThruUnknownUrl: true,
  rootPath: environment.inMemoryDataBase.root,
};

@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements InMemoryDbService {
  createDb() {
    const message: ConversationMessage[] = [
      { id: 101, conversationId: 1, text: 'Hello!', timestamp: 123, userId: 2 },
      { id: 102, conversationId: 1, text: 'Hello!', timestamp: 123, userId: 1 },
      { id: 103, conversationId: 1, text: 'How are you?', timestamp: 123, userId: 2 },
      { id: 104, conversationId: 1, text: 'Good! And you?', timestamp: 123, userId: 1 },
      { id: 105, conversationId: 1, text: 'Either am I', timestamp: 123, userId: 2 },
    ];

    const conversation: Conversation[] = [
      { id: 1, messages: message }
    ];

    return {
      message,
      conversation
    };
  }
}
