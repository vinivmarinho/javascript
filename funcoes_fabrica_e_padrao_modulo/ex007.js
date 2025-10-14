// Uso uma função IFEE (Função auto executável) com o objetivo de criar um escopo isolado, não permitindo que variáveis e funções iternas fiquem acessíveis fora
// Dentro dela, usei o module Pattern que retorna um objeto com métodos públicos (addPedido, alteraStatusPedido), enquanto mantenho outros dados internos privados (listaPedidos, criaPedidos)
const restaurante = (function() {
    // Variável privada ao módulo, somente as funções (addPedido e alteraStatusPedido, mostrarPedidos) conseguem acessá-la. Garante o encapsulamento e segurança dos dados
    let listaPedidos = []

    // Função de fábrica que cria e retorna meus objetos que representam pedidos. Cada objeto terá suas propriedades (item, qtd, status)
    function criaPedidos(item, qtd, status = "Em andamento") {
        mudaStatusPedido = function() {
            if (this.status === "Em andamento") {
                this.status = "Pedido finalizado"
            } else {
                this.status = "Em andamento"
            }
        }
        return {item, qtd, status, mudaStatusPedido}
    }

    // Cria o pedido usando a função de fábrica e adiciona ele na lista de pedidos
    function addPedido(item, qtd, status = "Em andamento") {
        let pedido = criaPedidos(item, qtd, status)
        listaPedidos.push(pedido)
        console.log(`${item} (qtd: ${qtd}) adicionado à lista de pedidos `)
    }

    function alteraStatusPedido(nomePedido) {
        const pedido = listaPedidos.find(p => p.item === nomePedido) // Percorre a lista e encontra o pedido que possui o mesmo nome do parâmetro  
        if (pedido) {
        pedido.mudaStatusPedido()
        console.log(`Status do pedido: ${pedido.status}`)
        } else {
            console.log("Pedido não foi encontrado")
            
        }
    }

    function mostrarPedidos() {
        listaPedidos.forEach((pedido) => {
            console.log(`Item: ${pedido.item}`)
            console.log(`Quantidade:${pedido.qtd}`)
            console.log(`Status ${pedido.status}`)
            console.log("=".repeat(20))
        })
    }
    // retornando todas as funções que o módulo permite acessar externamente
    return {
        addPedido,
        alteraStatusPedido,
        mostrarPedidos
    }
})();
const teste = restaurante.addPedido("Sushi", "120") // Recebe o objeto do pedido recém criado
const teste2 = restaurante.addPedido("Pizza", "12")
const teste3 = restaurante.addPedido("Cebola", "16")
const teste4 = restaurante.addPedido("Macarrão", "5")
const teste5 = restaurante.addPedido("Camarão", "75")
const teste6 = restaurante.addPedido("Sushi", "120")
restaurante.mostrarPedidos()