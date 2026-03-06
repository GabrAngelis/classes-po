"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.default = Pessoa;
