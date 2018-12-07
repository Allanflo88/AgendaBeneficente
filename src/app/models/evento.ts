import { Endereco } from "./endereco";
import { Url } from "url";

export class Evento {
  Id: String;
  Titulo: String;
  DataInicio: String;
  DataFim: String;
  HoraInicio: String;
  HoraFim: String;
  Endereco: Endereco;
  Entidade: Number;
  Descricao: String;
  Imagem: String;

  constructor(){
    this.Endereco = new Endereco();
  }
}
