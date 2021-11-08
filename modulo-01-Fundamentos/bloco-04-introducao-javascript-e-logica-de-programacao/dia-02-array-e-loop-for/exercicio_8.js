// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [];

for (let i = 1; i < 26; i += 1) {
  numbers.push(i);
}

for (let number of numbers) {
  console.log(number)
}