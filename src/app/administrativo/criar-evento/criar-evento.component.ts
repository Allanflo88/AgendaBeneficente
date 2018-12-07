import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/services/estados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/app/models/evento';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})
export class CriarEventoComponent implements OnInit {

  evento: Evento;
  estados = [];
  Imagem: File
  constructor(private router: Router,private storage: AngularFireStorage,private estadoService: EstadosService, private route: ActivatedRoute, private eventoService: EventosService, private db: AngularFireDatabase) {
    this.estados =  estadoService.getEstados();
    this.getEvento();
  }

  getEvento(){
    let id = this.route.snapshot.paramMap.get('id');
    this.evento = id ? this.eventoService.getEvento(id): new Evento();
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    if(f.invalid || f.untouched || f.errors || f.pristine){
      alert("Há campos incorretos ou não preenchidos");
    }
    else{
      this.evento.DataInicio = moment(this.evento.DataInicio.toString()).format("DD/MM/YYYY");
      this.evento.DataFim = moment(this.evento.DataFim.toString()).format("DD/MM/YYYY");
      try{
        var file:File = document.getElementById("imagem").files[0];
        console.log(file);
        var upRef = this.storage.ref("/eventos")
        var uploading = upRef.put(file);
        uploading.then(res=>{
          console.log(res);
          upRef.getDownloadURL().subscribe((res)=>{
            this.evento.Imagem = res
            this.db.list("eventos").push(this.evento);
            alert("Evento criado");
            this.router.navigate(["/feed"])
          });

        }).catch((err)=>{
          console.log(err);
        })
      }catch(err){
        console.log(err);
      }
      
      
    }
  }

}
