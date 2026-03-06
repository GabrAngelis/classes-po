export default abstract class Veiculo{
    readonly fabricante: string
    readonly anoFabricacao: string


    constructor(fabricante: string, anoFabricacao: string){
        this.fabricante = fabricante
        this.anoFabricacao = anoFabricacao
    }

    abstract detalhar(): void
}