"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aeronave_js_1 = __importDefault(require("./aeronave.js"));
const aro_js_1 = __importDefault(require("./aro.js"));
const automovel_js_1 = __importDefault(require("./automovel.js"));
const funcao_js_1 = __importDefault(require("./funcao.js"));
const tipopiloto_js_1 = __importDefault(require("./tipopiloto.js"));
let automovel = new automovel_js_1.default('GM', '2026', '12345', aro_js_1.default.ARO16);
let aeronave = new aeronave_js_1.default('Embraer', '2026', tipopiloto_js_1.default.CLAUD, true);
(0, funcao_js_1.default)(automovel);
(0, funcao_js_1.default)(aeronave);
