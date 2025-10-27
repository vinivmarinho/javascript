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


/* Exercício 2: Controle de Funcionários
Crie uma função construtora Funcionario(nome, cargo, salario)
No protótipo, adicione um método aumentarSalario(percentual) que aumenta o salário do funcionário.
Crie dois funcionários e aplique aumentos diferentes.
Mostre o salário antes e depois.
💼 Isso simula um sistema de RH simples */

// Função construtora
function Funcionario(nome, cargo, salario) {
    this.nome = nome,
    this.cargo = cargo,
    this.salario = salario
    console.log(`Olá, ${this.nome}! Seja muito bem vindo a nossa empresa!`)
}
// Adiciona método no prototype 
Funcionario.prototype.aumentarSalario = function(novoSalario) {
    this.salario += novoSalario
    console.log(`Parabéns, ${this.nome}! Você recebeu um aumento de R$${novoSalario.toFixed(2)} reais, seu novo salário é de R$${this.salario.toFixed(2)} reais`)
}
let f1 = new Funcionario("Vinícius", "Professor", 2500)
let f2 = new Funcionario("Isabelly", "Engenheira", 8900)
f1.aumentarSalario(1000)
f2.aumentarSalario(5678.90)