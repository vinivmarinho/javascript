// herança prototípica usando funções fábrica

// Criando uma função de fábrica:
function criarVeiculo(marca) {
    let kmRodados = 0 // Variável privada
    console.log(`${marca} criado`)
    function andar(distancia) {
        kmRodados += distancia
        console.log(`${marca} percorreu ${kmRodados}km no total`)
    }

    function verKm() {
        return `Km percorridos: ${kmRodados}km`
    }
    return {marca, andar, verKm}
}

const carro1 = criarVeiculo("Fiat")
carro1.andar(45)
carro1.verKm()

// Função que herda de "criarVeiculo"
function criarCarro(marca, cor) {
    const veiculo = criarVeiculo(marca) // Herda o veículo de "criarVeiculo"
    console.log(`Carro ${cor} criado`)

    function verCor() {
        console.log(`Cor do veículo: ${cor}`)
    }

    // Retorna tudo do veículo base e adiciona nova função
    return Object.assign({}, veiculo, {cor, verCor})
}

const carro2 = criarCarro("Toyota", "Marrom")
carro2.verCor()