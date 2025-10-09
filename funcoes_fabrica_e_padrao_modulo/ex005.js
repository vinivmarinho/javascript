// Biblioteca usando module pattern, função de fábrica e IIFE

// Módulo para gerenciar a biblioteca
const gerenciadorBiblioteca = (function () {
    const livros = []

    // Função de fábrica que cria os livros
    function criaLivro(titulo, autor, ano) {
        return{
            titulo,
            autor,
            ano,
            jaLido: false,
            mostraInfo() {
                console.log(`Título: ${this.titulo}. Autor: ${this.autor}. Ano de lançamento: ${this.ano}`)
            }
        }
    }

    // Add um livro na biblioteca
    function addLivro(titulo, autor, ano) {
        const livro = criaLivro(titulo, autor, ano)
        livros.push(livro)
        console.log(`${titulo} adicionado com sucesso!`)
    }

    // Marca o livro como lido
    function lido(titulo) {
        const livro = livros.find(l => l.titulo === titulo) // Percorre a biblioteca "livros" e verifica o livro que tiver o mesmo nome do parâmetro passado
        if (livro) { // Se existir um livro com o mesmo nome:
            if(!livro.jaLido) { // Se ele ainda não foi lido
                livro.jaLido = true
                console.log(`Você leu ${titulo}, parabéns!`)
            } else {
                console.log(`Você já leu ${titulo}`)
            }
        } else {
            console.log(`Livro não foi encontrado!`)
        }
    }

    // Lista todos os livros
    function mostraLivros() {
        livros.forEach(l => l.mostraInfo())
    }
    return {
        addLivro,
        lido,
        mostraLivros
    }
})()
gerenciadorBiblioteca.addLivro("Harry Potter", "J.k Rowling", 1997)
gerenciadorBiblioteca.addLivro("Harry Potter 2", "J.k Rowling", 1997)
gerenciadorBiblioteca.mostraLivros()