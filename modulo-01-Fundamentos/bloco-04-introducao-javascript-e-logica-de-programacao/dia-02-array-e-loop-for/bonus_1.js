// exbonus/4.2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for (let index = 1; index < numbers.length; index += 1) {
  console.log(`Número do index: ${index}`)
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      console.log(`Array antes de trocar: ${numbers}`)
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
      console.log(numbers)
    }
  }
}

console.log(numbers)