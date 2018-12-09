import { Url } from "url";
import { Endereco } from "./endereco";

export class Entidade {
  Id: String;
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
  OSCIP: any;
  OS: any;
  CEBAS: any;
  Representante: String;
  Imagem: any;

  constructor(){
    this.Endereco = new Endereco();
  }
}
