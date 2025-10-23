/* Crie um array com nomes de alunos.
Transforme todos os nomes para MAIÚSCULAS usando map().
Mostre o novo array sem alterar o original. */
let alunos = ["Vinícius", "Isabelly", "Fulana", "Ciclano"]
let alunosMaiusculos = alunos.map(function(aluno) {
    return aluno.toUpperCase()
})
console.log(alunosMaiusculos)

/* Cria um array de idades e:
Verifique se todos são maiores de idade usando every().
Verifique se algum é menor de idade usando some(). */
let idades = [30, 10, 34, 18, 21]
let maiorDeIdade = idades.every(i => i >= 18) 
if (maiorDeIdade) {
    console.log("Todos são maiores de idade")
} else {
    console.log("Nem todos são maiores de idade")
}
let menorDeIdade = idades.some(i => i < 18)
if (menorDeIdade) {
    console.log("Temos um menor de idade")
} else {
    console.log("Não temos menores de idade")
}
/* Usa forEach() para exibir cada elemento de um array de cores formatado */
let cores = ["Vermelho", "Azul", "Laranja"]
cores.forEach((cor, posicao) => {
    console.log(`Cor ${posicao+1}: ${cor}`)
})
