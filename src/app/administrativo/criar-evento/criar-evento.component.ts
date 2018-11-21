import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/services/estados.service';
import { ActivatedRoute } from '@angular/router';
import { getPreviousOrParentNode } from '@angular/core/src/render3/instructions';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})
export class CriarEventoComponent implements OnInit {

  estados = [];
  evento;
  constructor(private estadoService: EstadosService, private route: ActivatedRoute, private eventoService: EventosService) {
    this.estados = estadoService.getEstados();
    this.getEvento()
  }

  getEvento(){
    let id = this.route.snapshot.paramMap.get('id');
    this.evento = this.eventoService.getEvento(id);
    console.log(this.evento);
  }

  ngOnInit() {
  }

}
