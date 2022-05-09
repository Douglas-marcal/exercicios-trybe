const readlineSync = require('readline-sync');

function averageVelocity() {
  const space = readlineSync.questionInt('Distância: (m) ');
  const time = readlineSync.questionInt('Tempo: (s) ');

  const calc = space / time;

  console.log(calc);
}

module.exports = averageVelocity;
