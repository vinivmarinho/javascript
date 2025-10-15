// Exercícios para praticar os conceitos

// Nível 1 — Aquecimento (conceitos isolados)

// Crie uma factory function que gere objetos de usuários:
function criarUsuario(nome, idade, genero) {
    return {
        nome,
        idade,
        genero,
        apresentar() {
            console.log(`Olá, meu nome é ${nome}, eu tenho ${idade} anos de idade`)
        }
    }
}
const eu = criarUsuario("Vinícius", 21, "Masculino")
eu.apresentar()


//Prototype básico
// Crie uma função construtora Produto(nome, preco) e adicione ao prototype dela o método aplicarDesconto(percentual). Depois, crie dois produtos diferentes e aplique descontos distintos.

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
    console.log(`${nome} criado`)
}
Produto.prototype.desconto = function (porcentagem) {
    porcentagem /= 100
    let desconto = this.preco * porcentagem
    let valor_novo = this.preco - desconto
    console.log(`Com ${porcentagem*100}% de desconto, o valor de R$${this.preco} reais, passa a ser de R$${valor_novo} reais`)

}

const produto1= new Produto("Telefone", 600)
produto1.desconto(80)



// IIFE simples
// Crie uma IIFE que imprima uma saudação no console:
const iife = (function() {
    const teste = "Testando"
    console.log(`Olá, ${teste}`)
    return {teste}
})()
console.log(iife.teste)


/* Controle de Tarefas (To-do list)
Crie um módulo com factory function que:
Crie tarefas com título e status (pendente ou concluída);
Permita adicionar, remover e alternar status;
Liste todas as tarefas formatadas no console. */
const moduloTarefas = (function() {
    let listaTarefas = []

    // Função de fábrica criadora de tarefas
    function criarTarefas(titulo, status) {
        return {
            titulo,
            status,
            mostraStatus() {
                console.log(`A tarefa "${titulo}" está ${status}`)
            }
        }
    }

    // Adicionar a tarefa na lista
    function addTarefa(titulo, status = "Pendente") {
        const tarefa = criarTarefas(titulo, status)
        listaTarefas.push(tarefa)
        console.log(`Tarefa "${titulo}" adicionada à lista de tarefas, status: ${status}`)
    }
    // remover tarefa
    function removeTarefa(tituloTarefa) {
        const tarefaRemovida = listaTarefas.find(t => t.titulo === tituloTarefa) // Recebe a tarefa passada pelo parâmetro (tituloTarefa)
        if (tarefaRemovida) {
            listaTarefas = listaTarefas.filter(t => t!= tarefaRemovida) // Retorna para a nova lista todas as tarefas que tiverem o "titulo" diferente do "tituloTarefa"
            console.log(`Tarefa "${tituloTarefa}" removida`)
        } else {
            console.log(`"${tituloTarefa}" não se encontra na lista de tarefas`)
        }
        // OBS: Quero testar vendo a lista pra saber se a tarefa foi removida
    }

    function mostraLista() {
        for (let contador = 0; contador < listaTarefas.length; contador++) {
            console.log(listaTarefas[contador].titulo)
            console.log(listaTarefas[contador].status)
            console.log("=".repeat(30))
        }
        if (listaTarefas.length === 0) {
            console.log(`Nenhuma tarefa foi adicionada à lista`)
        }
    }

    function alternaStatus(tituloTarefa) {
        // Se tituloTarefa existir na lista, alterar o status dele para finalizado
        // OBS: O ".find" não cria uma cópia do objeto dentro da lista, ele retorna uma referência ao mesmo objeto. Por isso, a lista já fica atualizada quando muda o status da variável "tarefaEncontrada"
        const tarefaEncontrada = listaTarefas.find(t => t.titulo === tituloTarefa)
        if (tarefaEncontrada) {
            if (tarefaEncontrada.status === "Pendente") {
                tarefaEncontrada.status = "Finalizada"
                console.log(`${tarefaEncontrada.titulo} está ${tarefaEncontrada.status}`)
                removeTarefa(tarefaEncontrada.titulo)
                
            } else {
                tarefaEncontrada.status = "Pendente"
                console.log(`${tarefaEncontrada.titulo} está ${tarefaEncontrada.status}`)
            }
        } else {
            console.log(`${tituloTarefa} não está na lista`)
        }
    }
    return {
        addTarefa,
        mostraLista,
        alternaStatus,
    }
})()

const testando = moduloTarefas.addTarefa("Limpar a casa")
const testando1 = moduloTarefas.addTarefa("Varrer o chão")
const testando2 = moduloTarefas.addTarefa("Comprar pão")
const testando3 = moduloTarefas.addTarefa("Ir ao mercado")
moduloTarefas.alternaStatus("Limpar a casa")
moduloTarefas.mostraLista()