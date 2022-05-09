const readlineSync = require('readline-sync');

console.log('Fatorial')

const userInput = readlineSync.questionInt('Digite um número: ');

const factorial = (number) => number !== 0 ? number * factorial(number - 1) : 1;

function printFactorial() {
  return factorial(userInput);
}

console.log(printFactorial())

module.exports = printFactorial;
