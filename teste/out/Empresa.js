"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor(razaoSocial, cnpj, nomeFantasia) {
        if (razaoSocial !== undefined && cnpj !== undefined && nomeFantasia !== undefined) {
            this.razaoSocial = razaoSocial;
            this.cnpj = cnpj;
            this.nomeFantasia = nomeFantasia;
        }
        if (razaoSocial !== undefined && cnpj !== undefined && nomeFantasia !== nomeFantasia === undefined) {
            this.razaoSocial = razaoSocial;
            this.cnpj = cnpj;
        }
    }
}
exports.default = Empresa;
