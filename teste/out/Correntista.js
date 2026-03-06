"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Correntista extends Pessoa_1.default {
    constructor(nome, cpf, contaCorrente) {
        super(nome, cpf);
        this.contaCorrente = contaCorrente;
    }
    getContaCorrente() {
        return this.contaCorrente;
    }
}
exports.default = Correntista;
