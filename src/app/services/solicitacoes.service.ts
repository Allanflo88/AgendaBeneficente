import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  solicitacoes = [];
  constructor() { 
    this.solicitacoes = this.generateSolicitacoes();
  }

  getSolicitacao(id){
    this.solicitacoes.find((item)=>{
      return item.Id == id;
    })
    return id;
  }

  generateSolicitacoes(){
    let solicitacoes = [];

    for(let i = 0; i < 20; i++){
      solicitacoes.push(
        {
          Id: i + 1,
          Entidade: "teste",
          Tipo: (Number.isInteger(i/2)) ? false : true
        }
        );
    }

    return solicitacoes;
  }
  getSolicitacoes(){
    return this.solicitacoes;
  }
}
