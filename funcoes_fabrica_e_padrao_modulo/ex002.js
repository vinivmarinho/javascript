// Variáveis privadas:
// Vantagens: Evita alteração direta da variável mantendo o estado interno seguro e o código fica mais organizado

function criarContador() { // Função de fábrica
    let contador = 0 // variável privada. (Não é acessada diretamente em nenhuma outra parte do código, também não será retornada diretamente)

    // Acessa a variável somente dentro das funções, nunca diretamente
    function adicionar() {
        contador++ 
        console.log(`Contador: ${contador}`)
    }
    function diminuir() {
        contador--
        console.log(`Contador: ${contador}`)
    }

    function zerar() {
        contador = 0
        console.log(`Contador zerado`)
    }

    return {adicionar, diminuir, zerar} // retorna as funções do objeto
}
let meuContador = criarContador()
meuContador.adicionar()
meuContador.adicionar()
meuContador.adicionar()
meuContador.adicionar()
meuContador.adicionar()
meuContador.diminuir()
meuContador.zerar()


// Outro exemplo:
function criarConta(titular, saldoInicial = 0) { // Função de fábrica
    let saldo = saldoInicial // Variável privada, não será acessada diretamente

    function depositar(valor) {
        if (valor > 0) {
            saldo += valor
            console.log(`${valor} reais foram depositados na sua conta. Saldo atual: ${saldo}`)
        } else{
            console.log("Valor inválido para depósito")
        }
    }

    function sacar(valor) {
        if (valor <= saldo) {
            saldo -= valor
            console.log(`Você sacou ${valor} reais. Saldo atual: ${saldo}`)
        } else{
            console.log(`Você não possui esse valor disponível para saque. Saldo atual: ${saldo}`)
        }
    }
    function verSaldo() {
        return `Saldo atual: ${saldo}`
    }
    return {titular, depositar, sacar, verSaldo} // Retorna o objeto
}
conta1 = criarConta("Vinícius")
conta1.depositar(100)
console.log(conta1.verSaldo())
