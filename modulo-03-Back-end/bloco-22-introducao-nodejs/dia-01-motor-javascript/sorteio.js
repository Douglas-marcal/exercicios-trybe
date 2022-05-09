const readlineSync = require('readline-sync');

let isPlaying = true;

function randomNumberBetween0and10() {
  return Math.floor(Math.random() * 11);
}

function userInput() {
  const number = readlineSync.questionInt('Adivinhe um número de 0 a 10: ');

  return number;
}

function checkWinner() {
  const numberSelected = userInput();
  const numberDrawn = randomNumberBetween0and10();

  return numberSelected === numberDrawn
    ? 'Parabéns, número correto!'
    : `Opa, não foi dessa vez. O número era ${numberDrawn}`;
  
  readlineSync.promptLoop((input) => {
    return input.toLocaleLowerCase() !== 'sim';
  });
}

function game() {
  while (isPlaying) {
    console.log(checkWinner());
    const playAgain = readlineSync.question('Deseja jogar novamente? ');
    
    if (playAgain.toLocaleLowerCase().includes('n')) {
      isPlaying = false;
    };
  }
}

module.exports = game;
