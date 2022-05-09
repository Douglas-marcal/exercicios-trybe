const readlineSync = require('readline-sync');

console.log('1 - velocidade');
console.log('2 - sorteio');
console.log('3 - imc');
console.log('4 - fatorial');
console.log('5 - Fibonacci');

const userOption = readlineSync.questionInt('Qual script executar? ');

switch (userOption) {
  case 1:
    require('./velocidade');
    break;

  case 2:
    require('./sorteio');
    break;

  case 3:
    require('./imc');
    break;

  case 4:
    require('./fatorial');
    break;

  case 5:
    require('./fibonacci');
    break;

  default:
    break;
}
