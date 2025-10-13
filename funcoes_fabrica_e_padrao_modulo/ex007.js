const restaurante = (function() {
    function criaPedidos(item, qtd, status = "Em andamento") {
        this.item = item
        this.qtd = qtd
        this.status = status
        this.mudaStatusPedido = function() {
            if (this.status === "Em andamento") {
                this.status = "Pedido finalizado"
            } else {
                this.status = "Em andamento"
            }
        }
        console.log(`Pedido: ${this.item}, Qtd: ${this.qtd} Em andamento`)
    }
    return {
        criaPedidos
    }
})();
const teste = restaurante.criaPedidos("Pizza", "12")