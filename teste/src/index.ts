import Aeroave from "./aeronave.js";
import ARO from "./aro.js";
import Automovel from "./automovel.js";
import detalhar from "./funcao.js";
import TIPOPILOTO from "./tipopiloto.js";
import Veiculo from "./veiculo.js";

let automovel = new Automovel('GM', '2026', '12345', ARO.ARO16)

let aeronave = new Aeroave('Embraer', '2026', TIPOPILOTO.CLAUD, true)

detalhar(automovel)
detalhar(aeronave)

