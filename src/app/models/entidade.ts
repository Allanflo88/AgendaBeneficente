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
  OSCIP: File | Url;
  OS: File | Url;
  CEBAS: File | Url;
  Representante: Number;
  Imagem: File | Url;

  constructor(){
    this.Endereco = new Endereco();
  }
}
