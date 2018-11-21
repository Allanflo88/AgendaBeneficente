import { SafeUrl } from "@angular/platform-browser";

export class Endereco {
  Logradouro: String;
  Numero: Number;
  Bairro: String;
  Cidade: String;
  Estado: String;
  CEP: String;
  Localizacao: SafeUrl;

  constructor(){
  }
}
