import { Url } from "url";
import { Endereco } from "./endereco";

export class Entidade {
  Id: Number;
  NomeEmpresarial: String;
  NomeFantasia: String;
  Email: String;
  Password: String;
  TelefonePrimario: String;
  TelefoneSecundario: String;
  DataAbertura: String;
  CNPJ: String;
  Descricao: String;
  Endereco: Endereco;
  OSCIP: Url;
  OS: Url;
  CEBAS: Url;
  Representante: Number;
  Imagem: Url;

  constructor(){
    this.Endereco = new Endereco();
  }
}
