"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    return Pessoa;
}());
exports.default = Pessoa;
