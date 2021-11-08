// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angleA = 90;
const angleB = 45;
const angleC = 45;

let angleSum = angleA + angleB + angleC;
let isValid = angleA > 0 && angleB > 0 && angleC > 0;

if (isValid) {
  if (angleSum === 180) {
    console.log(true);
  } else {
    console.log(false)
  }
} else {
  console.log('Ângulo inválido!')
}