/* Manipulação de dígitos
 Dado um número inteiro qualquer:
 • converta-o para string;
 • transforme a string em array usando split;
 • remova o primeiro e o último dígito usando shift e pop;
 • una os dígitos restantes em uma nova string usando join. */
let numero = 8589765;
numero = numero.toString(); // Transforma em string
numero = numero.split(""); // Transforma em array
numero.shift(); // Remove o primeiro dígito da lista
numero.pop(); // Remove o último dígito da lista
numero = numero.join(""); // Une os números usando o separador entre parênteses
console.log(numero);
