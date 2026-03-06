import Aeroave from "./aeronave";
import Automovel from "./automovel";
import Veiculo from "./veiculo";

const detalhar = (veiculo: Veiculo) => {
    if(veiculo instanceof Automovel){
        console.log(`Chassi: ${veiculo.chassi}`)
        console.log(`Aro: ${veiculo.aro}`)
    }

    if(veiculo instanceof Aeroave){
        console.log(`Fabricante: ${veiculo.fabricante}`)
        console.log(`Ano de fabricação: ${veiculo.anoFabricacao}`)
        console.log(`Tipo de piloto: ${veiculo.tipoPiloto}`)
        console.log(`Transportador: ${veiculo.transportador}`)
    }

}

export default detalhar