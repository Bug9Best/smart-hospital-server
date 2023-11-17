import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {
  message: string = '';
  listMessages: any[] = [];
  @Input() selectedConversation: any = 1;

  constructor() { }

  sendMessage() {

  }
}
