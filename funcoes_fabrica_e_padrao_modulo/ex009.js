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

   function mostraPersonagens() {
    listaPersonagens.forEach(p => {
        console.log(`Nome: ${p.nome}`)
        console.log(`Classe: ${p.classe}`)
        console.log(`HP: ${p.HP}`)
        console.log("=".repeat(20))
    })
   }
   function atacar(atacante, defensor) {
    // criar variáveis que irão receber o nome do personagem (se ele estiver na lista)
    let personagemAtacante = listaPersonagens.find(p => p.nome === atacante) // Retorna o personagem que tiver o mesmo nome de "atacante"
    let personagemDefensor = listaPersonagens.find(p => p.nome === defensor) // Retorna o personagem que tiver o mesmo nome de "defensor"
    if (personagemAtacante && personagemDefensor) {
        personagemAtacante.atacar()
        personagemDefensor.recebeDano()
        mostraPersonagens()
    } else {
        console.log(`Personagem(s) não encontrado(s)`)
    }
   }
    return {
        addPersonagem,
        mostraPersonagens,
        atacar
    }
})()

const p1 = moduloPersonagens.addPersonagem("Mikey", "Mago")
const p2 = moduloPersonagens.addPersonagem("Kojiro", "Espadachim")
moduloPersonagens.mostraPersonagens()
moduloPersonagens.atacar("Mikey", "Kojiro")