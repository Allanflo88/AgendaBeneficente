import { Component, OnInit } from '@angular/core';
import { Representante } from 'src/app/models/representante';
import { EstadosService } from 'src/app/services/estados.service';
import { Solicitacao } from 'src/app/models/solicitacao';
import { ActivatedRoute } from '@angular/router';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-solicitar-deletar-entidade',
  templateUrl: './solicitar-deletar-entidade.component.html',
  styleUrls: ['./solicitar-deletar-entidade.component.css']
})
export class SolicitarDeletarEntidadeComponent implements OnInit {

  representante: Representante;
  estados = [];
  motivo = "";
  solicitacao: Solicitacao;
  user = {
    Id: (new DataStorageService).getItem("user") 
  };
  constructor(private estadoService: EstadosService, private route: ActivatedRoute, private solicitacoesService: SolicitacoesService) { 
    this.representante = new Representante();
    this.estados = estadoService.getEstados();
    this.getSolicitacao();

  }

  getSolicitacao(){
    let id = this.route.snapshot.paramMap.get('id');
    this.solicitacao = this.solicitacoesService.getSolicitacao(id);
    console.log(this.solicitacao);
  }

  ngOnInit() {
  }

}
