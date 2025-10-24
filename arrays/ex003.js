/* Nível 3 — Aplicações práticas
7. Crie um programa que receba um array com nomes e notas de alunos (ex: [["Ana", 8], ["Pedro", 5]])
Use filter() para retornar apenas os alunos aprovados (nota ≥ 7). */
let alunos = [ ["Vinícius", 8], ["Isabelly", 10], ["Fulano", 5] ]
let alunosAprovados = alunos.filter(aluno => aluno[1] >= 7)
let alunosReprovados = alunos.filter(aluno => aluno[1] < 7)
alunos.forEach(aluno => {
    console.log(`Aluno: ${aluno[0]}`)
    console.log(`Nota: ${aluno[1]}`)
    console.log("=".repeat(20))
})
console.log("Alunos aprovados:")
alunosAprovados.forEach(aluno => {
    console.log(aluno[0])
})
console.log("Alunos reprovados:")
alunosReprovados.forEach(aluno => {
    console.log(aluno[0])
})