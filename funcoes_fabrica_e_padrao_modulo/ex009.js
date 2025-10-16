/* Sistema de Personagens (estilo jogo)
Crie uma função construtora Personagem(nome, tipo) com métodos no prototype:
atacar() (mostra uma frase diferente conforme o tipo — mago, guerreiro, arqueiro);
receberDano() (reduz pontos de vida).
Depois, crie um módulo IIFE que controla os personagens ativos no jogo e permite:
Adicionar personagem;
Listar todos;
Simular ataques entre eles*/

// Função construtora:
function Personagem(nome, classe, HP) {
    this.nome = nome
    this.classe = classe
    this.HP = HP
}

// Métodos adicionados ao protoytpe
Personagem.prototype.atacar = function() {
    console.log(`O ${this.classe} ${this.nome} está atacando`)
}
Personagem.prototype.recebeDano = function() {
    this.HP -= 10
    console.log(`${this.nome} perdeu 10 pontos de vida`)
}

const moduloPersonagens = (function() {
    let listaPersonagens = []


    function addPersonagem(nome, classe, HP = 100) {
        const personagem = new Personagem(nome, classe, HP)
        listaPersonagens.push(personagem)
        console.log(`${nome} foi adicionado à lista de personagens com ${HP} pontos de vida`)
    }
    return {
        addPersonagem
    }
})()

const p1 = moduloPersonagens.addPersonagem("Mikey", "Mago")