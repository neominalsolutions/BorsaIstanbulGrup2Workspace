import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { SocketMessage, WebsocketService } from '../websocket.service';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messages: SocketMessage[] = [];
  message: SocketMessage = { source: environment.app, content: '' };

  constructor(private wSocketService: WebsocketService) {}
  ngOnInit(): void {
    console.log('environment.app', environment.app);

    this.wSocketService.messages$.subscribe(
      (recievedMessage: SocketMessage) => {
        console.log('recievedMessage', recievedMessage);

        this.messages = [...this.messages, recievedMessage];
      }
    );
  }

  // environment ortam değişkeni ile uygulamanın çıktısını değiştirmek.

  sendMessage() {
    debugger;
    this.wSocketService.send(this.message);
  }
}
