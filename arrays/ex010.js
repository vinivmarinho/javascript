/*  Ordenação e transformação
 Dado um array de números:
 • ordene em ordem decrescente com sort;
 • transforme cada número em string;
 • una tudo em uma única string separada por hífens usando join. */
let numeros = [10, 24, 46, 38, 29, 100, 2, 1, 0, 3];
let numerosOrdenados = numeros.sort((a, b) => a - b); // Ordenando em forma crescente
console.log(numerosOrdenados);
numerosOrdenados = numerosOrdenados.join("-"); // Une os números usando um hífen
console.log(numerosOrdenados);
