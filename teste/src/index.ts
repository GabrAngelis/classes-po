import Correntista from "./Correntista"
import Funcionario from "./funcionario"
import Pessoa from "./Pessoa"

let pessoa: Pessoa = new Correntista('Romario', '1234', '4321')
let funcionario = new Funcionario('Joao', '4444', '3333')
let correntista = new Correntista('Maria', '2323', '32323')

const dados = (pessoa: Pessoa) =>{
    console.log(`Nome: ${pessoa.nome}`)
    console.log(`CPF: ${pessoa.getCpf()}`)

    if(pessoa instanceof Funcionario){
        let objteto = pessoa as Funcionario
        console.log(`Credencial: ${objteto.getCredencial()}`)

            
        }
    if(pessoa instanceof Correntista){
        let objeto2 = pessoa as Correntista
        console.log(`Conta: ${objeto2.getContaCorrente()}`)
    }
    }


dados(pessoa)
dados(funcionario)
dados(correntista)


// let pessoa = new Pessoa('João', '23232323')

// let pessoa2 = new Pessoa('Masanori', '333333')

// let correntista = new Correntista('Gerson', '123456', 'AAAAAAA')

// console.log(`Objeto pessoa: CPF:${pessoa.getCpf()}Nome: ${pessoa.nome}`)
// console.log(`Correntista: CPF: ${correntista.getCpf()} Nome: ${correntista.nome} Conta: ${correntista.getContaCorrente()}`)

// console.log(`CPF Modificado: ${pessoa2.getCpf()}`)