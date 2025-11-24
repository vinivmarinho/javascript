/* Extração e montagem
 Dado o número 482913:
 • converta para string;
 • transforme em array de dígitos;
 • selecione os 4 primeiros com slice;
 • dobre cada dígito com map;
 • exiba a string final. */
let numero = 482913;
numero = numero.toString(); // Transforma em string
numero = numero.split(""); // Transforma em um array
numero = numero.slice(0, 4); // Selecionando só os 4 primeiros números
let numerosDobrados = numero.map((n) => n * 2); // Dobra cada número
console.log(numerosDobrados);
