import {Component, OnInit} from '@angular/core';
import {RoomComponent} from "./room/room.component";
import {RoomService} from "./room.service";
import {IRoom} from "./room/shared/room.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RoomService]
})
export class AppComponent {
  title = 'hotel';
  rooms: IRoom[];

  constructor(private roomService: RoomService) {
    this.rooms = roomService.rooms;
  }


}
