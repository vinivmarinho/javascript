// Sistema de gestão de jogos.
// Utilizo Module pattern, função de fábrica e IIFE

const gerenciaJogos = (function () {
    const personagens = [] // Lista dos personagens do jogo (privado)

    // Função de fábrica para criar os personagens (privado)
    function criaPersonagem(nome, classe, nivel, vida) {
        return {
            nome,
            classe,
            nivel,
            vida,
            mostraInfo() {
                console.log(`Nome: ${this.nome}. Classe: ${this.classe}. Nível: ${this.nivel}. Vida: ${this.vida} `)
            }
        }
    }

        // Adiciona o personagem na lista
        function addPersonagem(nome, classe, nivel, vida) {
            const personagem = criaPersonagem(nome, classe, nivel, vida)
            personagens.push(personagem)
            console.log(`${nome} adicionado na lista de personagens`)
        }

        // Mostra informações dos personagens
        function mostraPersonagens() {
            personagens.forEach(p => p.mostraInfo())
        }
        return {
            addPersonagem,
            mostraPersonagens
        }

    
})()
gerenciaJogos.addPersonagem("Mikey", "Prata", "7", "78")
gerenciaJogos.mostraPersonagens()