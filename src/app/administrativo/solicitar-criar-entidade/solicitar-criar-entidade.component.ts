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
import * as moment from 'moment';
import { Observable } from 'rxjs';

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
    if(id){
      this.solicitacoesService.getSolicitacao(id).subscribe((res)=>{
        this.solicitacao = res;
        this.entidade = this.solicitacao.entidade;
        this.representante = this.solicitacao.representante;
      });

    }
  }

  change(){
    this.Imagem = (<HTMLInputElement>document.getElementById("Imagem")).files[0]
    this.CEBAS = (<HTMLInputElement>document.getElementById("CEBAS")).files[0]
    this.OS = (<HTMLInputElement>document.getElementById("OS")).files[0]
    this.OSCIP = (<HTMLInputElement>document.getElementById("OSCIP")).files[0]
  }

  onSubmit(f:NgForm){
    if(f.invalid || f.errors || f.pristine){
      alert("Há campos incorretos ou não preenchidos");
    }
    else{
      var solicitacao: Solicitacao = new Solicitacao();
      solicitacao.id = Math.floor(Math.random() * 1000).toString();
      solicitacao.tipo = true;
      solicitacao.entidade = this.entidade
      solicitacao.entidade.OSCIP = this.OSCIP
      solicitacao.entidade.OS = this.OS
      solicitacao.entidade.CEBAS = this.CEBAS
      solicitacao.entidade.Imagem = this.Imagem
      solicitacao.representante = this.representante
      solicitacao.status = true
      solicitacao.entidade.Endereco.Localizacao = this.parseUrl(solicitacao.entidade.Endereco.Localizacao);
      var oscip = (this.OSCIP) ? this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.OSCIP.name) : null
      var os = (this.OS) ? this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.OS.name) : null
      var cebas = (this.CEBAS) ? this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.CEBAS.name) : null
      var imagem = this.storage.ref(this.entidade.NomeEmpresarial + "-" + this.Imagem.name)

      this.db.object("solicitacoes/" + solicitacao.id).set(solicitacao).then(()=>{
        if(oscip){
          oscip.put(this.OSCIP).then(()=>{
            oscip.getDownloadURL().subscribe((doc1)=>{
              this.db.object("solicitacoes/" + solicitacao.id + "/entidade").update({OSCIP: doc1})
            })
          })
        }
  
        if(os){
          os.put(this.OS).then(()=>{
            os.getDownloadURL().subscribe((doc2)=>{
              this.db.object("solicitacoes/" + solicitacao.id + "/entidade").update({OS: doc2})
    
            })
          })
  
        }
  
        if(cebas){
          cebas.put(this.CEBAS).then(()=>{
            cebas.getDownloadURL().subscribe((doc3)=>{
              this.db.object("solicitacoes/" + solicitacao.id + "/entidade").update({CEBAS: doc3})
            })
          })
  
        }
  
        imagem.put(this.Imagem).then(()=>{
          imagem.getDownloadURL().subscribe((img)=>{
            this.db.object("solicitacoes/" + solicitacao.id + "/entidade").update({Imagem: img})
          })
        })
        alert("Sua solicitação foi enviada");
        this.router.navigate(["/feed"]);
      })
      
    }
  }

  cadastrar(f: MouseEvent){
    var entidade: Entidade;
    entidade = this.solicitacao.entidade;
    var representante = this.representante
    representante.Id = Math.floor(Math.random() * 1000).toString();
    this.db.object("representantes/" + representante.Id).set(representante).then(()=>{
      entidade.Representante = representante.Id;
      this.db.object("entidades/" + this.entidade.Id).set(entidade).then(()=>{
        this.router.navigate(["/solicitacoes"]);
      });
    });
    f.preventDefault()

  }
  parseUrl(url:String): String{
    var parsedUrl = url;
    var splitedUrl = parsedUrl.split(" ");
    parsedUrl = splitedUrl[1].replace("src=", "")
    parsedUrl = parsedUrl.replace('/"', "")
    return url
  }

  deletar(f){
    this.db.object("solicitacoes/" + this.solicitacao.id).update({status: false}).then(()=>{
      this.router.navigate(["/solicitacoes"]);
    })
    f.preventDefault()
  }

}
