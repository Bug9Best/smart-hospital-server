import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  currentUser: any = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null;
  selectedConversation: any;
  listConversation: any = [];

  constructor(
    private chatService: ChatService
  ) { }

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
  }

  ngOnInit(): void {
    this.getConversation();
  }

  getConversation() {
    console.log(this.currentUser.staffId);
    this.chatService.getMessage(this.currentUser.staffId).subscribe(res => {
      this.listConversation = res;
      this.listConversation.map((item: any) => {
        item.message = item.message.map((message: any) => {
          message.isMe = message.senderId === this.currentUser.staffId;
          return message;
        });
        item.userId = item.message.map((receiver: any) => {
          return receiver.receiverId;
        });
      });
        
      console.log(res);
    })
  }


}
