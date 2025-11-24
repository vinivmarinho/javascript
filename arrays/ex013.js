/* Recorte e reconstrução
 Dado um array com 10 números:
 • selecione apenas os números das posições 3 a 7 usando slice;
 • multiplique cada número por 3;
 • transforme tudo em uma string separada por barras. 
 */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosFatiados = numeros.slice(3, 7);
let numerosMultiplicadosPor3 = numerosFatiados.map((numero) => numero * 3);
console.log(numerosMultiplicadosPor3);
numerosMultiplicadosPor3 = numerosMultiplicadosPor3.join("/");
console.log(numerosMultiplicadosPor3);
