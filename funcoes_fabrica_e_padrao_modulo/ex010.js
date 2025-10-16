/* Nível 4 — Projeto completo
🏪 7. Sistema de Loja (Projeto Final)
Monte um módulo completo combinando tudo:
Factory Function → cria produtos (nome, preço, estoque);
Prototype → adiciona métodos como vender(qtd) e repor(qtd);
Module Pattern + IIFE → controla a lista de produtos e mantém os dados privados;
Métodos públicos: adicionarProduto, listarProdutos, venderProduto(nome, qtd).
💡 Use forEach para exibir o estoque e find para localizar produtos pelo nome. */

// Vou usar função construtora e prototype para fazer os produtos
// Construtora de objeto
function Produto(nome, preco, qtdEstoque) {
    this.nome = nome
    this.preco = preco
    this.qtdEstoque = qtdEstoque
    console.log(`Produto ${this.nome} criado`)
    console.log()
}
// Métodos do protótipo
Produto.prototype.vender = function(qtdVendida) {
    if (this.qtdEstoque >= qtdVendida) {
        this.qtdEstoque -= qtdVendida
        console.log(`Produto vendido: ${this.nome}`)
        console.log(`Quantidade vendida: ${qtdVendida}`)
        console.log(`Total da compra: R$${qtdVendida * this.preco} reais`)
    } else {
        console.log("Quantidade excede o que existe no estoque")
    }
}
Produto.prototype.repor = function(qtdReposta) {
    this.qtdEstoque += qtdReposta
    console.log(`Quantida resposta no estoque: ${qtdReposta}`)
    console.log(`Quantidade atual em estoque: ${this.qtdEstoque} `)
}
const p1 = new Produto("Lápis", 10.50, 10)
p1.vender(9)
p1.repor(20)