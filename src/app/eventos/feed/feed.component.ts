import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  eventos = [];
  constructor(service: EventosService) {
    this.eventos =  service.getEventos();
  }

}
