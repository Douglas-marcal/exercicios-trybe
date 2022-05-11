function returnPromise(number1, number2, number3) {
  return new Promise((resolve, reject) => {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number') {
      reject('Informe apenas números');
    };

    const result = (number1 + number2) * number3;
    if (result < 50) {
      reject('Valor muito baixo');
    };

    resolve(result);
  })
}

module.exports = { returnPromise };
