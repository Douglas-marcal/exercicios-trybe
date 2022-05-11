const { returnPromise } = require('./exercise01');

function getRandomNumberBetween1And100() {
  return Math.floor(Math.random() * 100 + 1)
}

const number1 = getRandomNumberBetween1And100();
const number2 = getRandomNumberBetween1And100();
const number3 = getRandomNumberBetween1And100();

try {
  const result = returnPromise(number1, number2, number3);
  console.log(result);
} catch (error) {
  console.error(error)
}
