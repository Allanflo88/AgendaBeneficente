import { Component, OnInit } from '@angular/core';
import { Entidade } from 'src/app/models/entidade';
import { Representante } from 'src/app/models/representante';
import { NgForm, AbstractControl } from '@angular/forms';
import { EstadosService } from 'src/app/services/estados.service';
import { ActivatedRoute } from '@angular/router';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { Solicitacao } from 'src/app/models/solicitacao';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-solicitar-criar-entidade',
  templateUrl: './solicitar-criar-entidade.component.html',
  styleUrls: ['./solicitar-criar-entidade.component.css']
})
export class SolicitarCriarEntidadeComponent{

  entidade: Entidade;
  representante: Representante;
  OSCIP: File;
  OS: File;
  CEBAS: File;
  Imagem: File;
  estados = [];
  solicitacao: Solicitacao;
  user = {
    Id: (new DataStorageService).getItem("user") 
  };
  constructor(private estadoService: EstadosService, private route: ActivatedRoute, private solicitacoesService: SolicitacoesService) {
    this.entidade = new Entidade();
    this.representante = new Representante();
    this.estados = estadoService.getEstados();
    this.getSolicitacao();
  }
  
  getSolicitacao(){
    let id = this.route.snapshot.paramMap.get('id');
    this.solicitacao = this.solicitacoesService.getSolicitacao(id);
    console.log(this.solicitacao);
  }

  onSubmit(f:NgForm){
    if(f.invalid || f.untouched || f.errors || f.pristine){
      alert("Há campos incorretos ou não preenchidos");
    }
    else{
      alert("Sua solicitação foi enviada");

    }
  }

}
