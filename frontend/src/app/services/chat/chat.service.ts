import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }

  getMessage(id: string) {
    return this.http.get("http://localhost:3200/chat/" + id);
  }

  sendMessage(message: any) {
    return this.http.post("http://localhost:3200/chat/send", message);
  }
}
