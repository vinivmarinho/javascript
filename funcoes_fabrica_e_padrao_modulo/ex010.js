/* Projeto prático
🏪 7. Sistema de Loja (Projeto Final)
Montar um módulo completo combinando tudo:
Factory Function → cria produtos (nome, preço, estoque);
Prototype → adiciona métodos como vender(qtd) e repor(qtd);
Module Pattern + IIFE → controla a lista de produtos e mantém os dados privados;
Métodos públicos: adicionarProduto, listarProdutos, venderProduto(nome, qtd).
💡 Usar forEach para exibir o estoque e find para localizar produtos pelo nome. */

// Construtora de objeto
function Produto(nome, preco, qtdEstoque) {
    this.nome = nome
    this.preco = preco
    this.qtdEstoque = qtdEstoque
    console.log(`Produto "${this.nome}" adicionado ao estoque`)
    console.log(`Preço: ${this.preco}`)
    console.log(`Quantidade adicionada ao estoque: ${this.qtdEstoque}`)
    console.log("=".repeat(40))
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

//Módulo:
let moduloEstoque = (function() {
    let listaProdutos = []

    function addProduto(parametroProduto, parametroPreco, parametroQtdEstoque) {
        let produto = new Produto(parametroProduto, parametroPreco, parametroQtdEstoque)
        listaProdutos.push(produto)
    }

    function venderProdutos(parametroProduto, parametroQtdVendida) {
        let produtoEncontrado = listaProdutos.find(p => p.nome === parametroProduto)
        if (produtoEncontrado) {
            produtoEncontrado.vender(parametroQtdVendida) // Chama o método "vender" de protótipo se o "produtoEncontrado" existir
            if (produtoEncontrado.qtdEstoque = parametroQtdVendida) { // Se a qtd em estoque acabar, o produto é removido da lista
                listaProdutos = listaProdutos.filter(p => p != produtoEncontrado)
                console.log(`Qtd de "${produtoEncontrado.nome}" foi zerada.  O produto acabou!"`)
            }
        } else {
            console.log(`Produto "${parametroProduto}" não se encontra no estoque no momento`)
        }
    }

    function listarProdutos() {
        listaProdutos.forEach(produto => {
            console.log(`Produto: ${produto.nome}. Preço: ${produto.preco}. Quantidade em estoque: ${produto.qtdEstoque}`)
        })
    }
    return {
        addProduto,
        listarProdutos,
        venderProdutos
    }
})()

/* Criando uma variável sem usar o módulo 
const p1 = new Produto("Lápis", 10.50, 10)
p1.vender(9)
p1.repor(20) */

// Usando o módulo e suas funções
const p1 = moduloEstoque.addProduto("Lápis", 10.50, 10)
const p2 = moduloEstoque.addProduto("Computador", 1510, 300)
moduloEstoque.venderProdutos("Lápis", 10)
moduloEstoque.listarProdutos()