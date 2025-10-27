/* Exercício 1: Cadastro de Produtos
Crie uma função construtora Produto que receba nome, preco e estoque.
Adicione um método no protótipo chamado aplicarDesconto(percentual)
→ Ele deve reduzir o preço com base na porcentagem informada.
Crie 2 produtos e teste o método.
Esse tipo de lógica é muito usada em e-commerces ou sistemas de gestão. */

// Função construtora
function Produto(nome, preco, qtdEstoque) {
    this.nome = nome,
    this.preco = preco,
    this.qtdEstoque = qtdEstoque
}
// Adicionando método ao protótipo de "Produto"
Produto.prototype.aplicarDesconto = function(percentualDesconto) {
    // Calcula o preço final com desconto
    let precoFinal = this.preco * (1-percentualDesconto/100)
    console.log(`O produto "${this.nome}" com ${percentualDesconto}% de desconto sai por R$${precoFinal.toFixed(2)} reais `)
}
// Criando dois produtos:
let p1 = new Produto("Computador", 250, 1)
let p2 = new Produto("PC gamer", 6500, 4)
// Testando o método
p1.aplicarDesconto(15)
// Retornando o protótipo dos objetos criados
console.log(Object.getPrototypeOf(p1))
console.log(Object.getPrototypeOf(p2))