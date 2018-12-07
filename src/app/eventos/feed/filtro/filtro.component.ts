import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent{

  options = ["Título","Cidade","Entidade", "Data"];
  tipo = this.options[0];
  filtro = "";

  @Output() filtrar = new EventEmitter<any>();
  constructor() {
  }


  onSubmit(f:NgForm){
    this.filtrar.emit({
      tipo: this.tipo,
      filtro: this.filtro
    })
  }

  resetFiltro(){
    this.filtro = "";
  }

}
