const result = (number, checkWinOrLose) => {
  const rightNumber = Math.ceil(Math.random() * 5);
  return checkWinOrLose(number, rightNumber);
};

const isWinner = (betNumber, rightNumber) => {
  if (betNumber === rightNumber) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
};

console.log(result(3, isWinner));
