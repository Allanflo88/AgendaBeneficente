import { Entidade } from "./entidade";
import { Representante } from "./representante";

export class Solicitacao {

    entidade: Entidade;
    representante: Representante;
    motivo: String;
    id: String;
    tipo: boolean;
    status: boolean;

    constructor(){
        this.entidade = new Entidade();
        this.representante = new Representante();
    }
}
