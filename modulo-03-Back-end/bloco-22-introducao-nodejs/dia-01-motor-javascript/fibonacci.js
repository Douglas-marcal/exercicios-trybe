const readlineSync = require('readline-sync');

console.log('Sequência de Fibonacci');

const userInput = readlineSync.questionInt('Número: ');

const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let index = 2; index < userInput; index += 1) {
  fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1];
}

console.log(fibonacci.slice(1));
