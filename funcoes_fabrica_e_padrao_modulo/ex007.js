const restaurante = (function() {
    let listaPedidos = []

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
        console.log
        } else {
            console.log("Pedido não foi encontrado")
            
        }
    }

    return {
        addPedido,
        alteraStatusPedido
    }
})();
const teste = restaurante.addPedido("Sushi", "120") // Recebe o objeto do pedido recém criado
restaurante.alteraStatusPedido("Sushi")