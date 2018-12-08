import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Solicitacao } from '../models/solicitacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  solicitacoes:Solicitacao[];
  obs: Observable<Solicitacao[]>

  constructor(private db: AngularFireDatabase) { 
    this.obs = db.list<Solicitacao>("solicitacoes").valueChanges()
    this.obs.subscribe((res)=>{
      this.solicitacoes = res;
    })
  }

  getSolicitacao(id){
    this.solicitacoes.find((item)=>{
      return item.id = id;
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
    return this.obs;
  }
}
