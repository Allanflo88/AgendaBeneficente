import { Component, OnInit } from '@angular/core';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { Solicitacao } from 'src/app/models/solicitacao';

@Component({
  selector: 'app-listar-solicitacoes',
  templateUrl: './listar-solicitacoes.component.html',
  styleUrls: ['./listar-solicitacoes.component.css']
})
export class ListarSolicitacoesComponent implements OnInit {

  list:Solicitacao[];
  constructor(private service: SolicitacoesService) {
    service.getSolicitacoes().subscribe((res)=>{
      this.list = res;
    });
  }

  ngOnInit() {
  }

}
