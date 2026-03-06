"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
class Automovel extends veiculo_1.default {
    constructor(fabricante, anoFabricacao, chassi, aro) {
        super(fabricante, anoFabricacao);
        this.chassi = chassi;
        this.aro = aro;
    }
    detalhar() {
        console.log('Dados do automóvel:');
        console.log(`Fabricante ${this.fabricante}`);
        console.log(`Ano de fabricação: ${this.anoFabricacao}`);
        console.log(`Chassi: ${this.chassi}`);
        console.log(`Aro: ${this.aro}`);
    }
}
exports.default = Automovel;
