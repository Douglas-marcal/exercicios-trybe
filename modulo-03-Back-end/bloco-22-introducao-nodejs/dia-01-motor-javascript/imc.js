const readlineSync = require('readline-sync');

function categoryIMC(IMC) {
  if (IMC < 18.5) {
    return 'Abaixo do peso';
  } else if (IMC < 25) {
    return 'Peso normal';
  } else if (IMC < 30) {
    return 'Acima do peso';
  } else if (IMC < 35) {
    return 'Obesidade grau I';
  } else if (IMC < 40) {
    return 'Obesidade grau II';
  } else {
    return 'Obesidade graus III e IV';
  }
}

function calcIMC() {
  const weight = readlineSync.questionFloat('Qual a sua massa? (kg): ');
  const height = readlineSync.questionInt('Qual a sua altura? (cm): ');
  const HEIGHT_IN_METERS = height / 100;

  const IMC = weight / (HEIGHT_IN_METERS ** 2);

  return IMC.toFixed(1);
}

function printResultCalcIMC() {
  const valueIMC = calcIMC();
  const messageIMC = categoryIMC(valueIMC);

  const message = `Seu IMC é ${valueIMC}, classificado como: ${messageIMC}`;
  console.log(message);
}

printResultCalcIMC();

module.exports = printResultCalcIMC;