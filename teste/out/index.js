"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Aeronave from "./aeronave.js";
// import ARO from "./aro.js";
// import Automovel from "./automovel.js";
// import Empresa from "./Empresa.js";
// import detalhar from "./funcao.js";
// import TIPOPILOTO from "./tipopiloto.js";
// import Veiculo from "./veiculo.js";
//import Estrutura from "./estrutura";
const lista_1 = __importDefault(require("./lista"));
// let automovel = new Automovel('GM', '2026', '12345', ARO.ARO16)
// let aeronave = new Aeronave('Embraer', '2026', TIPOPILOTO.CLAUD, true)
// let emp1 = new Empresa('Razão', '123', 'Nome')
// let emp2 = new Empresa('ABC', '999')
// let emp3 = new Empresa()
// automovel.detalhar()
// aeronave.detalhar()
//let est = new Estrutura<Number, string>()
//est.lista.push('aa')
//est.lista.push(2)
let textos = [];
let lista = new lista_1.default(textos);
console.log(`O tamanho da lista é: ${lista.quantidade()}`);
