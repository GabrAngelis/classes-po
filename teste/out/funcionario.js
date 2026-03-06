"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(nome, cpf, credencial) {
        super(nome, cpf);
        this.credencial = credencial;
    }
    getCredencial() {
        return this.credencial;
    }
}
exports.default = Funcionario;
