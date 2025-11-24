/* Verificações e manipulação
 Dada uma string:
 • verifique se ela inclui a palavra 'ok' usando includes;
 • caso inclua, transforme toda a string em maiúsculas;
 • divida em caracteres e remova os três últimos com splice. */
let palavra = "Viníciusok";
if (palavra.includes("ok")) {
  palavra = palavra.toUpperCase();
  palavra = palavra.split("") // Dividindo os caracteres
  palavra.splice(-3, 3) // Removendo os três últimos caracteres. OBS: A quantidade sempre vai removendo pra frente e não pra trás
  console.log(palavra.join(""));
}
