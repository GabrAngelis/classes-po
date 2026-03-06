class Pessoa{
    public nome: string
    private cpf: string

    constructor(nome: string, cpf: string){
        this.nome = nome
        this.cpf = cpf
    }

    getCpf(){
        return this.cpf
    }
}

export default Pessoa