import Veiculo from "./veiculo";
import TIPOPILOTO from "./tipopiloto";

export default class Aeronave extends Veiculo{
    public tipoPiloto: TIPOPILOTO
    public transportador: boolean

    constructor(fabricante: string, anoFabricacao: string, tipoPiloto: TIPOPILOTO, transportador: boolean){
        super(fabricante, anoFabricacao)
        this.tipoPiloto = tipoPiloto
        this.transportador = transportador

    }

    detalhar(){
        console.log('Detalhes da aeronave:')
        console.log(`Fabricante: ${this.fabricante}`)
        console.log(`Ano de fabricação: ${this.anoFabricacao}`)
        console.log(`Chassi: ${this.tipoPiloto}`)
        console.log(`Aro: ${this.transportador}`)
    }
}