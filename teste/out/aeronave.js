"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
class Aeroave extends veiculo_1.default {
    constructor(fabricante, anoFabricacao, tipoPiloto, transportador) {
        super(fabricante, anoFabricacao);
        this.tipoPiloto = tipoPiloto;
        this.transportador = transportador;
    }
}
exports.default = Aeroave;
