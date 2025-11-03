/* Desafio: Sistema de Vendas
Monta um pequeno sistema usando várias funções construtoras com protótipos:
Produto(nome, preco)
Cliente(nome, tipo)
Venda(cliente, produto, quantidade)
No protótipo de Venda, adicione:
calcularTotal() → aplica desconto se o cliente for VIP
resumo() → mostra um relatório da compra no console
🎯 Esse é um exercício muito próximo de algo que você pode ver em um sistema real de gestão de vendas */

// Funções construtoras
function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
    console.log(`Produto ${this.nome} foi criado, ele custa R$${this.preco.toFixed(2)} reais`)
}
function Cliente(nome, tipo) { // Tipo => "Regular" ou "VIP"
    this.nome = nome,
    this.tipo = tipo
    console.log(`Cliente ${this.nome} cadastrado no plano ${this.tipo}`)
}
function Venda(cliente, produto, qtd) {
    this.cliente = cliente,
    this.produto = produto,
    this.qtd = qtd
}
// Método do prototype
Venda.prototype.calcularTotal = function() {
    let valorTotal = this.produto.preco * this.qtd // Valor total da compra
    if (this.cliente.tipo === "VIP") {
        let valorFinal = valorTotal / 2 // Valor da compra com desconto de 50%
        return(`Como esse é um caso de cliente vip, A compra de R$${valorTotal.toFixed(2)} sai com 50% de desconto, ficando em R$${valorFinal.toFixed(2)}`)
    } else {
        return(`A compra saiu por R$${valorTotal.toFixed(2)} reais`)
    }
}
// Método do prototype
Venda.prototype.resumoDaCompra = function() {
    console.log(`Compra feito por ${this.cliente.nome} que possui o plano ${this.cliente.tipo}`)
    console.log(`Produto comprado: ${this.produto.nome}. Quantidade: ${this.qtd}`)
    console.log(`${this.calcularTotal()}`) // Chama a função que calcula o total da compra
}

let prod = new Produto("Laptop", 234.56)
let cliente = new Cliente("Vini", "VIP")
let venda = new Venda(cliente, prod, 3)