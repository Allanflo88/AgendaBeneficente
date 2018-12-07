import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  entidades = this.generateEntidades();

  constructor(private sanitizer: DomSanitizer) { }

  login(login){
    return this.entidades.find((entidade)=>{
      return entidade.Email == login.Email && entidade.Password == login.Password;
    });
  }

  getEntidades(){
    return this.entidades;
  }

  getEntidade(id){
    return this.entidades.find((entidade)=>{
      return entidade.Id == id;
    });
  }

  getIdEntidade(nome){
    var entidade = this.entidades.find((ent)=>{
      return ent.NomeFantasia.includes(nome) || ent.NomeEmpresarial.includes(nome);
    });
    return entidade.Id;
  }

  generateEntidades(){
    let entidades = []

    for(let i = 0; i < 10;i++){
      entidades.push({
        Id: i+1,
        NomeEmpresarial: "Lar São Vicente de Paulo ",
        NomeFantasia: "Lar São Vicente de Paulo ",
        Email: "lsvp@terra.com.br",
        Password: "1234",
        TelefonePrimario: "(15) 3313-2025",
        TelefoneSecundario: "(15) 3313-9100",
        DataAbertura: "14/06/1896",
        NumeroInscricao: "11111111111",
        Descricao: "O Lar São Vicente de Paulo é uma instituição bastante antiga, datada de 14 de junho de 1896, fundada por uma equipe de vários médicos, como Antônio Guilherme da Silva, Luiz das Costa Coimbra, Pedro de Paula Bauer, Amâncio Padilha de Oliveira, João Vieira de Campos, entre outros voluntários. O presidente atual do Lar é Ivanildo de Souza, conta com ajuda de 81 funcionários e 400 voluntários para atender os 90 idosos que acolhemos na entidade, dando máxima atenção para os pacientes, oferecendo a todos o carinho e assistência médica necessária. Veja nossa estrutura, e também a equipe prestadora de serviços.",
        Endereco: {
          Logradouro: " Av. Betânia",
          Numero: 1255,
          Bairro: "Jardim Betania",
          Cidade: "Sorocaba",
          Estado: "SP",
          CEP: "18071-590",
          Localizacao: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.044655551349!2d-47.50597014990393!3d-23.458853663623888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f45ee93a0f8d%3A0xa05c476a158b1b45!2sLar+S%C3%A3o+Vicente+de+Paulo!5e0!3m2!1spt-BR!2sbr!4v1541954056662")
        },
        OSCIP: "",
        OS: "",
        CEBAS: "",
        Representante: i + 1,
        Imagem: "https://static.wixstatic.com/media/755996_c47434cc0df44ef881c191378cc38258~mv2.png/v1/fill/w_225,h_245,al_c,lg_1,q_80/755996_c47434cc0df44ef881c191378cc38258~mv2.webp"
      });
    }

    entidades.push({
      Id: "-1",
      NomeEmpresarial: "",
      NomeFantasia: "",
      Email: "admin@admin.com.br",
      Password: "1234",
      TelefonePrimario: "",
      TelefoneSecundario: "",
      DataAbertura: "",
      NumeroInscricao: "",
      Descricao: "",
      Endereco: {
        Logradouro: "",
        Numero: "",
        Bairro: "",
        Cidade: "",
        Estado: "",
        CEP: "",
        Localizacao: ""
      },
      OSCIP: "",
      OS: "",
      CEBAS: "",
      Representante: "",
      Imagem: ""
    });

    return entidades;
  }
}
