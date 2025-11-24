/* Limpeza e tratamento de texto
 Dado um texto com espaços extras:
 • remova espaços no início e fim com trim;
 • divida em palavras;
 • filtre palavras com 4 letras ou mais;
 • reconstrua tudo em uma nova frase. */
let texto = " Praticando métodos em JS ";
console.log(texto);
texto = texto.trim(); // Remove espaços do final e do começo
let palavras = texto.split(" "); // Dividindo em um array de palavras
console.log(palavras);
let palavrasGrandes = palavras.filter((palavra) => palavra.length > 4); // Palavras com + de 4 letras
console.log(palavrasGrandes);
let textoNovo = palavrasGrandes.join(" "); // Unindo
console.log(textoNovo);
