/*Filtragem, transformação e contagem
 Dado um array de nomes, crie um programa que:
 • filtre apenas os nomes com mais de 4 letras;
 • transforme todos em minúsculas;
 • adicione ao final o nome 'finalizado';
 • exiba o array resultante e a quantidade total de itens. */
let listaNomes = ["Vinícius", "Isa", "Fulano"];
let nomesGrandes = listaNomes.filter((nome) => nome.length > 4);
console.log(nomesGrandes);
let nomesMinusculos = listaNomes.map((nome) => nome.toLowerCase());
nomesMinusculos.push("finalizado");
console.log(`Número de nomes: ${nomesMinusculos.length}. Nomes: ${nomesMinusculos}`);
