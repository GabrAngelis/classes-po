import Pessoa from "./Pessoa";

class Funcionario extends Pessoa{
    private credencial: string

    constructor(nome: string, cpf: string, credencial: string){
        super(nome, cpf)
        this.credencial = credencial
    }

    getCredencial(){
        return this.credencial
    }
}

export default Funcionario