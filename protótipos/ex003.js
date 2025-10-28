/* Exercício 5: Sistema de Contas Bancárias
Cria uma função construtora ContaBancaria(cliente, saldo).
No protótipo, adicione:
depositar(valor)
sacar(valor) → deve impedir saldo negativo
verSaldo()
Depois:
Crie dois clientes diferentes e teste depósitos e saques.
💰 Cenário real de controle financeiro. */

// Função construtora:
function Conta(cliente, saldo) {
    this.cliente = cliente,
    this.saldo = saldo
    console.log(`Conta do(a) cliente ${this.cliente} criada. Saldo atual => R$${this.saldo.toFixed(2)} reais`)
}
// Adiciona método ao prototype
Conta.prototype.depositar = function(valorDeposito) {
    if (valorDeposito > 0) {
        this.saldo += valorDeposito
        console.log(`R$${valorDeposito} reais foram depositados na conta do(a) ${this.cliente}. Saldo atual => ${this.saldo.toFixed(2)}`)
    } else {
        console.log("Valor precisa ser maior que zero para o depósito")
    }
}

Conta.prototype.sacar = function(valorSaque) {
    if (valorSaque > 0) {
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque
            console.log(`O(a) cliente ${this.cliente} sacou R$${valorSaque} reais. Saldo atual => ${this.saldo.toFixed(2)} reais`)
        } else {
            console.log("Saldo insuficiente")
        }
    } else {
        console.log("Valor para saque precisa ser maior que 0")
    }
}
Conta.prototype.verSaldo = function() {
    console.log(`O(a) cliente ${this.cliente} possui R$${this.saldo} reais em sua conta`)
}

let conta = new Conta("Vini", 2000)
conta.depositar(1000)
conta.sacar(2000)
conta.verSaldo()
