/*  Seu desafio é escrever um programa que faça o seguinte:
 1. Remover espaços extras de cada nome (trim).
 2. Transformar todos os nomes em minúsculas (toLowerCase).
 3. Separar produtos compostos em um array (split).
 4. Achatar todos os subarrays em um único array (flat).
 5. Remover itens com menos de 3 letras (filter).
 6. Remover itens repetidos (filter + indexOf).
 7. Ordenar alfabeticamente (sort).
 8. Transformar cada palavra em maiúscula (map + toUpperCase).
 9. Juntar tudo em uma string separada por vírgulas (join). */
let produtos = [
  " Café premium ",
  "açúcar ",
  "Farinha branca",
  "CAFÉ PREMIUM",
  " sal ",
  "Arroz integral",
  " feijão ",
  "feijão",
  "SAL",
];

produtos = produtos.map((produto) => produto.trim()); // Remove os espaços de cada produto
let produtosMinusculos = produtos.map((produto) => produto.toLowerCase()); // Transforma os produtos em minúsculos
let produtosCompostos = produtos.filter(
  (produto) => produto.split(" ").length > 1
); // Cada produto que quando separado tiver o length maior que 1
produtosCompostos = produtosCompostos.map((produto) => produto.toLowerCase());
produtos = [produtosMinusculos, produtosCompostos].flat(Infinity); // Achata os dois arrays em 1 só
produtos = produtos.filter((produto) => produto.length > 3); // Filtra somente os produtos com mais de 3 letras

// Encontrando duplicados com filter + indexOf
let duplicados = produtos.filter((produto, index) => {
  return produtos.indexOf(produto) !== index;
});
console.log(duplicados);

// Removendo os duplicados
produtos = produtos.filter((produto, index) => {
  // O index é o índice de cada produto
  return produtos.indexOf(produto) === index; // Retorna os produtos que tiverem o primeiro índice (indexOf(produto)) igual ao do índice atual (index)
});
console.log(produtos);
produtos = produtos.sort(); // Ordenando alfabeticamente
console.log(produtos);

// Transformando para maiúscula
produtos = produtos.map((produto) => produto.toUpperCase());
console.log(produtos);

// Unindo tudo com uma vírgula
produtos = produtos.join(",");
console.log(produtos);
