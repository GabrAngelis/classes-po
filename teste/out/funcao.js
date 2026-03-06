"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aeronave_1 = __importDefault(require("./aeronave"));
const automovel_1 = __importDefault(require("./automovel"));
const detalhar = (veiculo) => {
    if (veiculo instanceof automovel_1.default) {
        console.log(`Chassi: ${veiculo.chassi}`);
        console.log(`Aro: ${veiculo.aro}`);
    }
    if (veiculo instanceof aeronave_1.default) {
        console.log(`Fabricante: ${veiculo.fabricante}`);
        console.log(`Ano de fabricação: ${veiculo.anoFabricacao}`);
        console.log(`Tipo de piloto: ${veiculo.tipoPiloto}`);
        console.log(`Transportador: ${veiculo.transportador}`);
    }
};
exports.default = detalhar;
