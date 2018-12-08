import { Component } from '@angular/core';
import { Entidade } from 'src/app/models/entidade';
import { Representante } from 'src/app/models/representante';
import { NgForm } from '@angular/forms';
import { EstadosService } from 'src/app/services/estados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitacoesService } from 'src/app/services/solicitacoes.service';
import { Solicitacao } from 'src/app/models/solicitacao';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-solicitar-criar-entidade',
  templateUrl: './solicitar-criar-entidade.component.html',
  styleUrls: ['./solicitar-criar-entidade.component.css']
})
export class SolicitarCriarEntidadeComponent{

  entidade: Entidade = new Entidade();
  representante: Representante = new Representante();
  OSCIP: File;
  OS: File;
  CEBAS: File;
  Imagem: File;
  estados = [];
  solicitacao: Solicitacao
  user = {
    Id: (new DataStorageService).getItem("user") 
  };
  permission = this.user.Id == "-1"
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private router: Router, private estadoService: EstadosService, private route: ActivatedRoute, private solicitacoesService: SolicitacoesService) {
    this.estados = estadoService.getEstados();
    this.getSolicitacao();
  }
  
  getSolicitacao(){
    let id = this.route.snapshot.paramMap.get('id');
    this.solicitacao = this.solicitacoesService.getSolicitacao(id);
  }

  change(){
    this.Imagem = (<HTMLInputElement>document.getElementById("Imagem")).files[0]
    this.CEBAS = (<HTMLInputElement>document.getElementById("CEBAS")).files[0]
    this.OS = (<HTMLInputElement>document.getElementById("OS")).files[0]
    this.OSCIP = (<HTMLInputElement>document.getElementById("OSCIP")).files[0]
  }

  onSubmit(f:NgForm){
    if(f.invalid || f.untouched || f.errors || f.pristine){
      alert("Há campos incorretos ou não preenchidos");
    }
    else{
      var solicitacao: Solicitacao = new Solicitacao();
      solicitacao.tipo = false
      solicitacao.entidade = this.entidade
      solicitacao.entidade.OSCIP = this.OSCIP
      solicitacao.entidade.OS = this.OS
      solicitacao.entidade.CEBAS = this.CEBAS
      solicitacao.entidade.Imagem = this.Imagem
      solicitacao.representante = this.representante
      var oscip = this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.OSCIP.name)
      var os = this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.OS.name)
      var cebas = this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.CEBAS.name)
      var imagem = this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.Imagem.name)
      oscip.put(this.OSCIP).then(()=>{
        oscip.getDownloadURL().subscribe((doc1)=>{
          solicitacao.entidade.OSCIP = doc1

          os.put(this.OS).then(()=>{
            os.getDownloadURL().subscribe((doc2)=>{
              solicitacao.entidade.OS = doc2

              cebas.put(this.CEBAS).then(()=>{
                cebas.getDownloadURL().subscribe((doc3)=>{
                  solicitacao.entidade.CEBAS = doc3

                  imagem.put(this.Imagem).then(()=>{
                    imagem.getDownloadURL().subscribe((img)=>{
                      solicitacao.entidade.Imagem = img


                      this.db.object("solicitacoes/" + solicitacao.id).set(solicitacao).then(()=>{
                        alert("Sua solicitação foi enviada");
                        this.router.navigate(["/feed"]);
                      })

                    })
                  })
                })
              })

            })
          })

        })
      })
      
    }
  }

  cadastrar(){
    var entidade: Entidade;
    entidade = this.solicitacao.entidade;
    this.db.object("entidades/" + this.entidade.Id).set(entidade);
  }

}
