

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

    return {
        addProduto
    }
})()

/* const p1 = new Produto("Lápis", 10.50, 10)
p1.vender(9)
p1.repor(20) */

// Tentar chamar a função addProduto e fazer o mesmo das linhas 42 até 44
const p1 = moduloEstoque.addProduto("Lápis", 10.50, 10)
