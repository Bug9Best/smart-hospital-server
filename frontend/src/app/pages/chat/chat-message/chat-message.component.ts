import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {
  currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  message: string = '';
  @Input() listMessages: any[] = [];
  @Input() selectedConversation: any = "";

  constructor(
    private chatService: ChatService
  ) { }


  @Output() onSend = new EventEmitter<any>();

  sendMessage() {
    let value = {
      senderId: this.currentUser.staffId,
      receiverId: this.selectedConversation.message[0].senderId,
      content: this.message,
    };

    this.chatService
      .sendMessage({ ...value })
      .subscribe((res: any) => {
        this.message = '';
        this.onSend.emit();
      });
  }
}
