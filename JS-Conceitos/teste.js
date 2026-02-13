// console.log('Hello World!') 
// // node nomedoarquivo.ts - para rodar

// // const - atribui valor e não muda
// // variáveis numéricas apenas Number
// // Variáveis "var" não precisam ser declaradas antes do uso - variável global
// // Variáveis "let" são usadas apeans para contexto local, sem global


// let steveRogers = 'Capitão América'
// var tonyStark = 'Homem de Ferro'
// console.log('Super heróis da Marvel: '+steveRogers+" e "+tonyStark)

// let pagamento = 1500.0
// var conta = 2356
// console.log('Fazer pagamento de: '+pagamento+" na conta: "+conta)

// //nome = "Principe T'Challa"
// //console.log("Meu nome é: "+nome)
// //nome = "Black Panther"
// //console.log("Meu nome é: "+nome)

// //var nome;

// if(true){
//     var hulk = 'Eric Bana' // ao trocar para let a variável se mantém local
//     console.log(hulk)
// }
// console.log(hulk)         // printa com variável var, expõe erro com let

// let idade = 80 // number
// let nome = "Steve Rogers" // String

// let capitao = {nome: "Steve Rogers", idade: 80} // Object
// console.log("Nome do personagem: "+capitao.nome+ " idade: "+capitao['idade']) // Pode acessar atributo tanto por objeto.atributo ou objeto['atributo']

// function calcularPotencia(base, expoente) { // os valores dentro de () são chamados parâmetros ou argumentos
//     return base**expoente
// }

// let resultado = calcularPotencia(2, 3) 
// console.log('Resultado: '+resultado)

let calcularPotencia = new Function("base, expoente", "return base**expoente") //método construtor

let resultado = calcularPotencia(2, 3)
console.log('Resultado: '+resultado)

const personagem = {
    apelido: "Capitão América",
    nome: "Steve Rogers",
    habilidades: "Força e velocidade",
    descricao: function () {
        return "Nome: "+this.nome + "| Apelido: "+this.apelido + "| Poderes: "+this.habilidades // this = autoreferência, se refere ao proprietário da função, ou objeto
    }
}

console.log(personagem.descricao())

// soma = function(valor1, valor2) { //função anônima, dentro de variável
//     return valor1 + valor2
// }

// console.log("Valor da soma: " +soma(3,5))

soma = (valor1, valor2) => valor1 + valor2 

console.log("Valor da soma: " +soma(3, 5))

