import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'studimeter-app';

  ratingForm = new FormControl(3);

  average: number = 0;

  socket!: Socket;
  ngOnInit() {
    // this.socket = io('http://192.168.0.3:3000');
    // this.socket.on(
    //   'msgToClient',
    //   (average: number) => (this.average = average)
    // );
    // this.ratingForm.valueChanges.subscribe((value: number) =>
    //   this.socket.emit('msgToServer', value)
    // );
  }

  handleSliderChange() {
    // this.socket.emit('msgToServer', 'hello world');
  }
}
