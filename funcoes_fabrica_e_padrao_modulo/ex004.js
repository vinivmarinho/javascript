// Usando module pattern para criar um código de armazenamento de usuários

// Variável que armazena o módulo, tudo dentro dele fica escondido, não podendo ser acessado por fora, somente o que for retornado no final fica acessível

const controleUsuario = (function () {
    const usuarios = [] // Lista de usuários privada

    // Função de fábrica que cria usuários
    function criaUsuario(nome, email) {
        return {
            nome,
            email,
            mostraInfo() {
                console.log(`Usuário: ${this.nome}, email: ${this.email}`)
            }
        }
    }

    // Adiciona um usuário na lista
    function addUsuario(nome, email) {
        // Variável recebe a função de fábrica
        const usuario = criaUsuario(nome, email)
        usuarios.push(usuario) // Adiciona o usuário criado na lista
        console.log(`${nome} foi adicionado com sucesso!`)
    }

    // Mostra todos os usuários
    function mostraUsuarios() {
        console.log("Lista de usuários:")
        usuarios.forEach(usuario => usuario.mostraInfo())
    }

    // Retorna e expoe ao restante do código apenas o necessário
    return {addUsuario, mostraUsuarios}
})()

// Usando o módulo:
controleUsuario.addUsuario("Vinícius", "vini.marinho@gmail.com")
controleUsuario.mostraUsuarios()