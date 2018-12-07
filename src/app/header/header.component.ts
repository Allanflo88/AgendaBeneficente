import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  user = {
    Id: (new DataStorageService).getItem("user")
  };
  permission = this.user.Id == "-1";

  constructor() {

  }

}
