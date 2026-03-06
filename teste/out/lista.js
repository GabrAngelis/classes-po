"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lista {
    constructor(dados) {
        this.dados = dados;
    }
    quantidade() {
        return this.dados.length;
    }
    pegarDados(posição) {
        return this.dados[posição];
    }
}
exports.default = Lista;
