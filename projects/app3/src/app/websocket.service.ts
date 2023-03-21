import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export type SocketMessage = {
  source: string;
  content: string;
};

//singleton olması itibari ile service instance alınırken socket bağlantısını açıyouruz.
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  // bağlantı yönetimi yapar.
  private socketConnection$!: WebSocketSubject<SocketMessage>;
  // socket kanalındaki mesajları dinleyecek olan nesne
  public messages$!: Observable<SocketMessage>;

  constructor() {
    this.socketConnection$ = webSocket({
      url: 'ws://localhost:5000',
    });
    this.messages$ = this.socketConnection$.asObservable();
  }

  send(message: SocketMessage) {
    // sunucuya mesajı socket kanalı üzerinden gönderir.
    console.log('sendMessage', message);
    this.socketConnection$.next(message);
  }
}
