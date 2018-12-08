import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from 'src/app/services/entidades.service';
import { Entidade } from 'src/app/models/entidade';

@Component({
  selector: 'app-detalhes-entidade',
  templateUrl: './detalhes-entidade.component.html',
  styleUrls: ['./detalhes-entidade.component.css']
})
export class DetalhesEntidadeComponent {

  
  entidade: Entidade
  serviceEntidade;
  constructor(private route: ActivatedRoute, serviceEntidade: EntidadesService) {
    this.entidade = new Entidade();
    this.serviceEntidade = serviceEntidade;
    this.getEntidade();
  }

  getEntidade(){
    let id = this.route.snapshot.paramMap.get('id');
    this.entidade = this.serviceEntidade.getEntidade(id);
  }
}
