// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const number1 = 9;
const number2 = 7;
const number3 = 4;

let even = false

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  even = true
}
console.log(even)