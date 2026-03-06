"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
class Aeronave extends veiculo_1.default {
    constructor(fabricante, anoFabricacao, tipoPiloto, transportador) {
        super(fabricante, anoFabricacao);
        this.tipoPiloto = tipoPiloto;
        this.transportador = transportador;
    }
    detalhar() {
        console.log('Detalhes da aeronave:');
        console.log(`Fabricante: ${this.fabricante}`);
        console.log(`Ano de fabricação: ${this.anoFabricacao}`);
        console.log(`Chassi: ${this.tipoPiloto}`);
        console.log(`Aro: ${this.transportador}`);
    }
}
exports.default = Aeronave;
