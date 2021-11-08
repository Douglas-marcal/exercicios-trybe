// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = []

for (number of numbers) {
  if (number % 2 === 1) {
    odd.push(number)
  } 
}

if (odd.length > 0) {
  console.log(`Há ${odd.length} números ímpares:`)
  for (number of odd) {
    console.log(number)
  }
} else {
  console.log('Não há números ímpares.')
}