/* Exercício 3: Sistema de Clientes
Crie uma função construtora Cliente(nome, idade, tipo) onde tipo pode ser "Regular" ou "VIP".
No protótipo, adicione:
Um método saudacao() que retorna mensagens diferentes:
"Bem-vindo, cliente VIP!"
"Olá, cliente regular!"
Depois, crie uma lista de clientes e use forEach para mostrar a saudação de cada um.
Muito útil para sistemas de fidelidade ou CRM. */

// Função construtora
function Cliente(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
}
// Adiciona método ao prototype
Cliente.prototype.saudacao = function() {
    if (this.tipo === "Regular") {
        console.log("Olá, cliente regular! tudo bem?")
    } else if (this.tipo === "VIP") {
        console.log("Seja bem vindo, cliente VIP! Aceita um café?")
    }
}
// Criando os clientes
let c1 = new Cliente("Vinícius", 21, "VIP")
let c2 = new Cliente("Isabelly", 22, "VIP")
let c3 = new Cliente("Fulano", 34, "Regular")
let c4 = new Cliente("Ciclana", 55, "VIP")
let c5 = new Cliente("Outro nome", 45, "Regular")
let c6 = new Cliente("Criança", 12, "Regular")

// Adiciona os clientes na lista
let clientes = [c1, c2, c3, c4, c5, c6]
clientes.forEach(cliente => {
    // Chama o método para cada cliente da lista
    return(cliente.saudacao()) // Obs: Usa o return, pois dentro do método já tem um "console.log"
})
