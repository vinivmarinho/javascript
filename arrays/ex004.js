/* 8. Crie um array de objetos representando produtos (nome e preço)
Mostre apenas os produtos com preço acima de 50 usando filter().
Crie um novo array apenas com os nomes dos produtos usando map(). */
let estoque = [
    {produto: "Camisa de time", preco: 50},
    {produto: "Computador" , preco: 2500},
    {produto: "Lápis", preco: 5},
    {produto: "Caderno", preco: 20}
]
let produtosCaros = estoque.filter(elemento => elemento.preco >= 50)
console.log("Produtos acima de R$50 reais: ")
produtosCaros.forEach(elemento => {
    console.log(`elemento.produto => R$${elemento.preco} reais`)
})