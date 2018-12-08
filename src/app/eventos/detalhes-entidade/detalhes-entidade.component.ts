import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from 'src/app/services/entidades.service';
import { Entidade } from 'src/app/models/entidade';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhes-entidade',
  templateUrl: './detalhes-entidade.component.html',
  styleUrls: ['./detalhes-entidade.component.css']
})
export class DetalhesEntidadeComponent {

  
  entidade: Entidade
  serviceEntidade;
  constructor(private route: ActivatedRoute, serviceEntidade: EntidadesService, private sanitizer:DomSanitizer) {
    this.entidade = new Entidade();
    this.serviceEntidade = serviceEntidade;
    this.getEntidade();
  }

  getEntidade(){
    let id = this.route.snapshot.paramMap.get('id');
    this.entidade = this.serviceEntidade.getEntidade(id);
    this.entidade.Endereco.CEP = this.entidade.Endereco.CEP.slice(0,5) + "-" +this.entidade.Endereco.CEP.slice(5)
    this.entidade.Endereco.Localizacao = this.sanitizer.bypassSecurityTrustResourceUrl(this.entidade.Endereco.Localizacao )
  }
}
