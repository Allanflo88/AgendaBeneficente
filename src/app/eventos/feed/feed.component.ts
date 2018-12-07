import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { EntidadesService } from 'src/app/services/entidades.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  eventos = [];
  constructor(private service: EventosService, private entidadesService: EntidadesService) {
    this.getEventos();
  }

  getEventos(){
    this.service.getEventos().subscribe(res=>{
      this.eventos = res;
    });
  }

  onFiltro(filtro:any){
    this.getEventos();
    this.eventos = this.eventos.filter((evento)=>{
      switch(filtro.tipo){
        case "Data":
          var date = moment(filtro.filtro).format("DD/MM/YYYY");
          return evento.DataInicio ==  date || evento.DataFim == date;
        case "Entidade":
          var id = this.getEntidade(filtro.filtro)
          return id ? id : 0;
        case "Título":
        console.log(evento);
          return evento.Titulo.includes(filtro.filtro);
        case "Cidade":
          return evento.Endereco.Cidade.includes(filtro.filtro);
      }
    });
  }

  getEntidade(nome){
    return this.entidadesService.getIdEntidade(nome);
  }
}
