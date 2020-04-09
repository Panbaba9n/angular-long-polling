import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConversationMessageService } from '../../services/conversation-message/conversation-message.service';
import { ConversationService } from '../../services/conversation-message/conversation.service';
import { ConversationMessage, Conversation } from '../../shared/models/conversation.model';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit, OnDestroy {
  public conversations: Conversation[];
  public messageForm = new FormGroup({
    newMessage: new FormControl('', Validators.required),
  });

  constructor(
    private conversationMessageService: ConversationMessageService,
    private conversationService: ConversationService
  ) { }

  ngOnInit() {
    this.conversationService.entities$.subscribe(res => this.conversations = res);

    this.getConversations();

    this.conversationService.pollingConversations()
      .subscribe(res => this.conversations = res);
  }

  ngOnDestroy() {
    this.conversationService.stopPolling();
  }

  getConversations() {
    this.conversationService.getAll();
  }

  onSubmit() {
    if (this.messageForm.invalid) {
      return;
    }

    const messageText = this.messageForm.value.newMessage.trim();

    if (!messageText) {
      return;
    }

    const messageObj: ConversationMessage = {
      conversationId: 1,
      text: messageText,
      timestamp: new Date().valueOf(),
      userId: 1
    } as ConversationMessage;

    this.sendMessage(messageObj);

    this.messageForm.reset();
  }

  sendMessage(message: ConversationMessage) {
    this.conversationMessageService.add(message);

    this.getConversations();

    // just to test longpoll
    setTimeout(() => {
      const messageObj: ConversationMessage = {
        conversationId: 1,
        text: 'Let me think',
        timestamp: new Date().valueOf(),
        userId: 2
      } as ConversationMessage;
      this.conversationMessageService.add(messageObj);
    }, 5000);
  }

  trackByConversations(index: number, conversation: Conversation): number {
    return conversation.id;
  }

  trackByConversationMessages(index: number, conversationMessage: ConversationMessage): number {
    return conversationMessage.id;
  }

}
