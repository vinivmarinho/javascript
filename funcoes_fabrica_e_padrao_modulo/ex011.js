/* Objetivo
Criar um sistema simples em JavaScript para controlar o fluxo de produção de uma fábrica, usando:
Uma função de fábrica para criar novos fluxos de produção;
Um IIFE (função autoexecutável) para encapsular o código e proteger os dados internos;
Um objeto interno responsável por controlar o estado e as etapas de cada produto sendo fabricado. */
/* Imagine uma pequena fábrica que produz itens seguindo etapas específicas:
Matéria-prima recebida
Em montagem
Em teste de qualidade
Pronto para envio
Você precisa criar um sistema que:
Gere novos fluxos de produção para cada produto (usando uma função de fábrica);
Controle o status atual e avance as etapas de cada produto;
Encapsule tudo dentro de um IIFE, de modo que o sistema só exponha funções controladas. */


// IIFE para encapsular o código
let fluxoProducao = (function() {
    
    // Função de fábrica 
    function fluxoDeProducao(nomeProduto) {
        // Variáveis internas (privadas)
        let etapas = ["Recebido", "Em montagem", "Em teste de qualidade", "Pronto para envio"] // Lista com as etapas do fluxo
        let statusAtual = "Recebido"
        return {
            nomeProduto,
            mostrarStatus() {
                console.log(`Produto "${this.nomeProduto}". Etapa atual: ${statusAtual}`)
            },

            avancarEtapa() {
                let posicao = etapas.indexOf(statusAtual) // Recebe a posição do elemento que está em "statusAtual"
                if (posicao < etapas.length - 1) {
                    statusAtual = etapas[posicao + 1] // Recebe a lista "etapas" na posição da variável "posição" e adiciona + 1 posição
                    console.log(`${this.nomeProduto} avançou para: ${statusAtual}`)
                } else {
                    console.log(`${this.nomeProduto} finalizado`)
                }
            },

            reiniciar() {
                statusAtual = etapas[0] // Volta para a primeira fase da lista "etapas"
                console.log(`${this.nomeProduto} foi reiniciado`)
            }
        }
    } 
    return {
        fluxoDeProducao // Retorna a função de fábrica
    }
})()

// Testando
let computador = fluxoProducao.fluxoDeProducao("Computador")
computador.mostrarStatus()
computador.avancarEtapa()
computador.avancarEtapa()
computador.avancarEtapa()
computador.avancarEtapa()
computador.reiniciar()
