// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function higherValue(array) {
  let count = -Infinity;
  let higher = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higher) {
      higher = array[index]
      count = index
    }
  }
  console.log(higher)
  return count
}

console.log(higherValue([2, 3, 6, 7, 10, 1, 12, 300, 4, 8, 2, 600]))