import Veiculo from "./veiculo";
import TIPOPILOTO from "./tipopiloto";

export default class Aeroave extends Veiculo{
    public tipoPiloto: TIPOPILOTO
    public transportador: boolean

    constructor(fabricante: string, anoFabricacao: string, tipoPiloto: TIPOPILOTO, transportador: boolean){
        super(fabricante, anoFabricacao)
        this.tipoPiloto = tipoPiloto
        this.transportador = transportador

    }
}