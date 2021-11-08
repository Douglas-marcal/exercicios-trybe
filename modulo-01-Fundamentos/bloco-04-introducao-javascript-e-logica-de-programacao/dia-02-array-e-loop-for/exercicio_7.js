// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower = 100000000;

for (number of numbers) {
  if (number < lower) {
    lower = number;
  }
}

console.log(`O menor número do array é ${lower}`)