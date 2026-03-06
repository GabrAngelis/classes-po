import Pessoa from "./Pessoa";

export default class Correntista extends Pessoa{
    private contaCorrente: string

    constructor(nome: string, cpf: string, contaCorrente: string){
        super(nome, cpf)
        this.contaCorrente = contaCorrente
    }

    getContaCorrente(){
        return this.contaCorrente
    }

}