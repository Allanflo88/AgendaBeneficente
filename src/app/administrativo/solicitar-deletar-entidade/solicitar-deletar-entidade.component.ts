import { Component, OnInit } from '@angular/core';
import { Representante } from 'src/app/models/representante';
import { EstadosService } from 'src/app/services/estados.service';
import { Solicitacao } from 'src/app/models/solicitacao';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Entidade } from 'src/app/models/entidade';

@Component({
  selector: 'app-solicitar-deletar-entidade',
  templateUrl: './solicitar-deletar-entidade.component.html',
  styleUrls: ['./solicitar-deletar-entidade.component.css']
})
export class SolicitarDeletarEntidadeComponent{

  representante: Representante;
  estados = [];
  motivo = "";
  solicitacao: Solicitacao;
  user = {
    Id: (new DataStorageService).getItem("user") 
  };
  constructor(private router: Router, private db: AngularFireDatabase, private estadoService: EstadosService, private route: ActivatedRoute, private solicitacoesService: SolicitacoesService) { 
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
      var solicitacao: Solicitacao = new Solicitacao()

      solicitacao.entidade = new Entidade()
      solicitacao.representante = this.representante
      solicitacao.motivo = this.motivo
      solicitacao.tipo = false

      this.db.object("solicitacoes/" + solicitacao.id).set(solicitacao).then(()=>{
        alert("Sua solicitação foi enviada");
        this.router.navigate(["/feed"]);
      })
    }
  }

  desativar(){
    this.db.object("solicitacoes" + this.solicitacao.id).update({Ativo: true});
  }

}
