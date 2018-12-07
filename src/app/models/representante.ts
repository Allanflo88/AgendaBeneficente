import { Endereco } from "./endereco";

export class Representante {

    Nome: Number;
    Identidade: String;
    CPF: String;
    Cargo: String;
    Telefone: String;
    Celular: String;
    Endereco: Endereco;

    constructor(){
        this.Endereco = new Endereco();
    }

}
