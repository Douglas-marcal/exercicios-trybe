// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const firstNumber = 30;
const secondNumber = 56;
const thirdNumber = 26;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log(`O número ${firstNumber} é maior do que ${secondNumber} e ${thirdNumber}.`)
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log(`O número ${secondNumber} é maior do que ${firstNumber} e ${thirdNumber}.`)
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  console.log(`O número ${thirdNumber} é maior do que ${firstNumber} e ${secondNumber}.`)
} else {
  console.log('Os números são iguais.')
}