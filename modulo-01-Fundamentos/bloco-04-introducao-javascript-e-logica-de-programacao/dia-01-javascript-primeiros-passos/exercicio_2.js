// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const firstNumber = 15;
const secondNumber = 51;

if (firstNumber > secondNumber) {
  console.log(`O número ${firstNumber} é maior do que ${secondNumber}.`)
} else if (firstNumber < secondNumber) {
  console.log(`O número ${secondNumber} é maior do que ${firstNumber}`)
} else {
  console.log(`Os números são iguais.`)
}