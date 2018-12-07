import { Component, OnInit, ViewChild, ElementRef, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { EntidadesService } from 'src/app/services/entidades.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Evento } from 'src/app/models/evento';
import { Entidade } from 'src/app/models/entidade';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.css']
})
export class DetalhesEventoComponent {

  evento: Evento;
  entidade: Entidade;
  user = {
    Id: (new DataStorageService).getItem("user") 
  };
  constructor(private sanitizer:DomSanitizer, private route: ActivatedRoute, private serviceEventos: EventosService, serviceEntidade: EntidadesService) {
    this.serviceEventos = serviceEventos;
    this.getEvento();
    this.entidade = serviceEntidade.getEntidade(this.evento.Id);
  }

  getEvento(){
    let id = this.route.snapshot.paramMap.get('id');
    this.evento = this.serviceEventos.getEvento(id);
    this.evento.Endereco.Localizacao = this.sanitizer.bypassSecurityTrustResourceUrl(this.evento.Endereco.Localizacao)
  }

}
