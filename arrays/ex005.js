/* Desafio final
Cria um “sistema de lista de tarefas” simples usando um array:
Permita adicionar tarefas (push()),
Remover (splice()),
Listar todas (forEach()),
Marcar como concluída (pode usar um objeto { nome: 'Estudar JS', concluida: true }). */
let tarefas = [
    {nome: "Varrer o chão", concluida: "Não concluída"},
    {nome: "Limpar a casa", concluida: "Não concluída"}
]
function addTarefa(listaTarefas, tarefa) {
    listaTarefas.push({nome: tarefa, concluida: "Não concluída"})
    console.log(`"${tarefa}" foi adicionada à lista de tarefas`)
}
function removeTarefa(listaTarefas, tarefa) {
    for (let contador = 0; contador < listaTarefas.length; contador++) {
        if (listaTarefas[contador].nome === tarefa) {
            listaTarefas.splice(contador, 1)
            console.log(`Tarefa "${tarefa}" foi removida da lista de tarefas`)
        }
    }
}
function listarTarefas(listaTarefas) {
    /* listaTarefas.forEach(t => {
        console.log(t)
    }) */
   console.log("Listando tarefas:")
   for (let contador = 0; contador < listaTarefas.length; contador++){
        console.log(`Tarefa => ${listaTarefas[contador].nome}`)
        console.log(`Status => ${listaTarefas[contador].concluida}`)
        console.log("=".repeat(20))
   }
}
function concluirTarefa(listaTarefas, tarefa) {
    for (let contador = 0; contador < listaTarefas.length; contador++) {
        if (listaTarefas[contador].nome === tarefa) {
            if (listaTarefas[contador].concluida === "Não concluída") {
                listaTarefas[contador].concluida = "Tarefa concluída"
                console.log(`A tarefa: "${listaTarefas[contador].nome}" foi concluída`)
            }
           
        }
    }
}
addTarefa(tarefas, "Regar as plantas")
concluirTarefa(tarefas, "Regar as plantas")
listarTarefas(tarefas)
// for(let contador = 0; contador < tarefas.length; contador++) {
    // console.log(tarefas[contador].nome)
// }
