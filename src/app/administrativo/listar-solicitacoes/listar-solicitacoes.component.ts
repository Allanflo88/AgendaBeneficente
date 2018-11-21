import { Component, OnInit } from '@angular/core';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';

@Component({
  selector: 'app-listar-solicitacoes',
  templateUrl: './listar-solicitacoes.component.html',
  styleUrls: ['./listar-solicitacoes.component.css']
})
export class ListarSolicitacoesComponent implements OnInit {

  list = [];
  constructor(private service: SolicitacoesService) {
    this.list = service.getSolicitacoes();
  }

  ngOnInit() {
  }

}
