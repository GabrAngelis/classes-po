"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Correntista_1 = __importDefault(require("./Correntista"));
var funcionario_1 = __importDefault(require("./funcionario"));
var pessoa = new Correntista_1.default('Romario', '1234', '4321');
var funcionario = new funcionario_1.default('Joao', '4444', '3333');
var correntista = new Correntista_1.default('Maria', '2323', '32323');
var dados = function (pessoa) {
    console.log("Nome: ".concat(pessoa.nome));
    console.log("CPF: ".concat(pessoa.getCpf()));
    if (pessoa instanceof funcionario_1.default) {
        var objteto = pessoa;
        console.log("Credencial: ".concat(objteto.getCredencial()));
    }
    if (pessoa instanceof Correntista_1.default) {
        var objeto2 = pessoa;
        console.log("Conta: ".concat(objeto2.getContaCorrente()));
    }
};
dados(pessoa);
dados(funcionario);
dados(correntista);
// let pessoa = new Pessoa('João', '23232323')
// let pessoa2 = new Pessoa('Masanori', '333333')
// let correntista = new Correntista('Gerson', '123456', 'AAAAAAA')
// console.log(`Objeto pessoa: CPF:${pessoa.getCpf()}Nome: ${pessoa.nome}`)
// console.log(`Correntista: CPF: ${correntista.getCpf()} Nome: ${correntista.nome} Conta: ${correntista.getContaCorrente()}`)
// console.log(`CPF Modificado: ${pessoa2.getCpf()}`)
