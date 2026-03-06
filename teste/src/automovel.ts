import ARO from "./aro"
import Capotavel from "./capotavel"
import Freiavel from "./freiavel"
import Veiculo from "./veiculo"

export default class Automovel extends Veiculo implements Freiavel, Capotavel{
    readonly chassi: string
    public aro: ARO
    
    constructor(fabricante: string, anoFabricacao: string, chassi: string, aro: ARO){
        super(fabricante, anoFabricacao)
        this.chassi = chassi
        this.aro = aro
    }
    capotar() {
        console.log("Morri.")
    }
    freiar() {
        console.log('Freia!!!!!')
    }

    detalhar() {
        console.log('Dados do automóvel:')
        console.log(`Fabricante ${this.fabricante}`)
        console.log(`Ano de fabricação: ${this.anoFabricacao}`)
        console.log(`Chassi: ${this.chassi}`)
        console.log(`Aro: ${this.aro}`)
    }
}