import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  options = ["Título","Cidade","Entidade"];
  constructor() { }

  ngOnInit() {
  }

}
