import { Entidade } from "./entidade";
import { Representante } from "./representante";

export class Solicitacao {

    entidade: Entidade;
    representante: Representante

    constructor(){
        this.entidade = new Entidade();
        this.representante = new Representante();
    }
}
