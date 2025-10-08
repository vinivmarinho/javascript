// Usando uma função construtora:
function Carro(marca, cor) {
    this.marca = marca
    this.cor = cor
    this.ligar = function() {
        console.log(`${this.marca} da cor ${this.cor} ligado!`)
    }
}
const carro1 = new Carro("Toyota", "Vermelho")
carro1.ligar()

// Mesmo exemplo usando uma função de fábrica
function criarCarro(marca, cor) {
    function ligar() {
        console.log(`${marca} da cor ${cor} ligado!`)
    }
    return {marca, cor, ligar} // retorna o objeto que cont[em 2 propriedades e uma função
}
const carro2 = criarCarro("Honda", "azul")
carro2.ligar()
olá