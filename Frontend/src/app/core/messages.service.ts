import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];
 
  add(message: string) {
    this.messages = [
      message,
      ...this.messages
    ];
  }
 
  clear() {
    this.messages = [];
  }
}