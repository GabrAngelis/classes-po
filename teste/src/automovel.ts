import ARO from "./aro"
import Veiculo from "./veiculo"

export default class Automovel extends Veiculo{
    readonly chassi: string
    public aro: ARO
    
    constructor(fabricante: string, anoFabricacao: string, chassi: string, aro: ARO){
        super(fabricante, anoFabricacao)
        this.chassi = chassi
        this.aro = aro
    }
}