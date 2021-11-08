// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const number1 = 4;
const number2 = 6;
const number3 = 8;

let odd = false;

if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
  odd = true;
}

console.log(odd);
