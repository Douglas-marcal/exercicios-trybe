// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function lowerIndex(array) {
  let count = Infinity;
  let lower = Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < lower) {
      count = index;
      lower = array[index];
    }
  }
  console.log(lower, count)
  return count
}

console.log(lowerIndex([2, 4, 6, 7, 10, 0, -3, -100, 500, 600]))