/* Nível 1 — Fundamentos
1. Cria um array com 5 frutas e:
Mostra o primeiro e o último item no console.
Mostra o total de elementos.*/
let array = ["Banana", "Laranja", "Mamão", "Uva", "Morango"]
console.log(array[0])
console.log(array[array.length-1])
console.log(`Total de elementos na lista: ${array.length}`)
array.push("Abacate")
array.pop()
console.log(array)

// Cria um array de números
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,567,458]
let numerosPares = numeros.filter(n => n % 2 == 0)
console.log(numerosPares)
let soma = numeros.reduce((acumulador, valorAtual) =>{ // Retorna a soma de todo o array usando o método "reduce"
    return acumulador + valorAtual
}, 0) 
console.log(soma)
