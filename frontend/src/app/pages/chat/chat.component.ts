import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  selectedConversation: any;
  listConversation: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,1];

  constructor() { }

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
  }

}
