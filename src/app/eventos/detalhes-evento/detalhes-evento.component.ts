import { Component, OnInit, ViewChild, ElementRef, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { EntidadesService } from 'src/app/services/entidades.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.css']
})
export class DetalhesEventoComponent {

  evento = {
    id: "",
    titulo: "",
    dataInicio: "",
    dataFim: "",
    horaInicio: "",
    horaFim: "",
    endereco: {
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      CEP: "",
      localizacao: ""
    },
    entidade: "",
    descricao: "",
    imagem: "",
    localizacao: ""
  };
  serviceEventos;
  entidade = {
    Id: "",
    NomeFantasia: ""
  };
  user = {
    Id: (new DataStorageService).getItem("user") 
  };
  constructor(private route: ActivatedRoute, serviceEventos: EventosService, serviceEntidade: EntidadesService) {
    this.serviceEventos = serviceEventos;
    this.getEvento();
    this.entidade = serviceEntidade.getEntidade(this.evento.id);
  }

  getEvento(){
    let id = this.route.snapshot.paramMap.get('id');
    this.evento = this.serviceEventos.getEvento(id);
  }

}
