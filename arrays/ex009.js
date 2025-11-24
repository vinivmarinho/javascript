/* Trabalhando com palavras
 Dada uma frase qualquer:
 • divida a frase em palavras com split;
 • selecione apenas as palavras que começam com 'A' usando filter;
 • transforme todas em maiúsculas com map;
 • exiba o array resultante. */
let frase = "Praticando alguns métodos em JS";
frase = frase.split(" ");
let palavrasComA = frase.filter((palavra) => palavra[0] === "a");
console.log(frase);
console.log(palavrasComA);
frase = frase.map((palavra) => palavra.toUpperCase()); // Transforma cada palavra em maiúscula
frase = frase.join(" "); // Unindo em uma string
console.log(frase);
