import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  obs: Observable<Evento[]>;
  eventos: Evento[];

  constructor(private sanitizer: DomSanitizer, private db: AngularFireDatabase) {
    this.obs = db.list<Evento>("eventos").valueChanges();
    this.obs.subscribe((res)=>{
      this.eventos = res;
    })
  }

  generateEventos(){
    let eventos = []
    for(let i = 0; i < 20; i++){
      eventos.push({
        Id: i + 1,
        Titulo: (Number.isInteger(i/2)) ? "10ª Festa Junina" : "1ª Festa da primavera",
        DataInicio: "12/10/2018",
        DataFim: "12/10/2018",
        HoraInicio: "17:00",
        HoraFim: "22:00",
        Endereco: {
          Logradouro: "Rua da Candelaria",
          Numero: 123,
          Bairro: "Centro",
          Cidade: "Sorocaba",
          Estado: "SP",
          CEP: "18170000",
          Localizacao: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.851548107206!2d-47.44768398904974!3d-23.53784120269263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf61e082124797%3A0xd3939b8620294aa7!2sVentron!5e0!3m2!1spt-BR!2sbr!4v1541678355085")
        },
        Entidade: i+1,
        Descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et accumsan ipsum. Sed convallis ligula quis tristique iaculis. Vivamus malesuada mauris eu auctor aliquet. Ut ac aliquam justo. Cras massa tellus, pretium sed vulputate eu, imperdiet at purus. Sed neque velit, cursus nec urna non, varius faucibus diam. Nam ut consequat neque. Sed aliquam vel mi in sollicitudin.",
        Imagem: (Number.isInteger(i/2)) ? "https://s1.static.brasilescola.uol.com.br/artigos/dancas-bandeirolas-fogueira-sao-alguns-dos-elementos-tipicos-festa-junina-5b16977eb585e.jpg?i=https://brasilescola.uol.com.br/upload/conteudo/images/dancas-bandeirolas-fogueira-sao-alguns-dos-elementos-tipicos-festa-junina-5b16977eb585e.jpg&w=600&h=350&c=FFFFFF&t=1" : "http://conhecendomt.com.br/wp-content/uploads/2018/09/Festa-da-Primavera-02-red.jpg"
      });

    }

    return eventos;
  }

  getEventos(){
    return this.obs;
  }

  getEvento(id){
    return this.eventos.find((evento)=>{
      return evento.Id == id;
    });
  }
}
