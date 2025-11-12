// Exemplo sem desestruturação
const numeros = [10, 20, 100];
// Método repetitivo, prolonga o código
let primeiroIndice = numeros[0];
let segundoIndice = numeros[1];
let terceiroIndice = numeros[2];
console.log(primeiroIndice, segundoIndice, terceiroIndice);

// Desestruturando um array
const numeros2 = [30, 40, 50];
let [a, b, c] = numeros2; // 'a', 'b' e 'c' recebem os três índices (posições) de numeros2
console.log(a, b, c);

// Outro exemplo
const nomes = ["Vinícius", "Isa", "Fulano"];
let [primeiroNome, segundoNome, terceiroNome] = nomes
// Pulando um índice:
// let [primeiroNome, , terceiroNome]
console.log(primeiroNome, segundoNome, terceiroNome)
