export interface ConversationMessage {
  id: number;
  conversationId: number;
  text: string;
  timestamp: number;
  userId: number;
}

export interface Conversation {
  id: number;
  messages: Array<ConversationMessage>;
}
