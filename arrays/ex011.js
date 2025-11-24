/* Remoção e inserção
 Dado um array de produtos:
 • remova dois itens a partir do índice 1 usando splice;
 • insira no lugar os itens 'NOVO1' e 'NOVO2';
 • transforme todos os itens em minúsculas;
 • exiba o array final. */
let produtos = ["Computador", "Celular", "Fone de ouvido", "Carregador", "Pen drive"];
let produtosRemovidos = produtos.splice(1, 2, "NOVO1", "NOVO2"); // Recebe os itens removidos
produtos.splice(1, 2, "NOVO1", "NOVO2"); // Modifica os arrays
console.log(produtos);
produtos = produtos.map((produto) => produto.toLowerCase());
console.log(produtos);
