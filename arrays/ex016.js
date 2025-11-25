/* Verificação, concatenação e transformação
 Dado dois arrays de nomes:
 • concatene os arrays;
 • filtre nomes que terminam com 'o';
 • transforme cada nome filtrado em maiúsculas;
 • exiba o array resultante e seu tamanho. */
let nomes1 = ["Vinícius", "Isa", "Fulano"];
let nomes2 = ["Marinho", "Haddad", "Ciclano"];
let nomesCompletos = nomes1.concat(nomes2); // Concatenando as 2 arrays
let nomesComFinalO = nomesCompletos.filter((nome) => nome[nome.length - 1] === "o");
console.log(nomesComFinalO);
let nomesMaiusculos = nomesComFinalO.map((nome) => nome.toUpperCase());
console.log(nomesMaiusculos);
console.log(nomesMaiusculos.length);
