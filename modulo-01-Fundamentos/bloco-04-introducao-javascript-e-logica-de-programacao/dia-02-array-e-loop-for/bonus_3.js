// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let lastNumber = numbers.length - 1

for (let index = 0; index < numbers.length; index += 1) {
  switch (index) {
    case lastNumber:
      newNumbers.push(numbers[lastNumber] * 2)
      break;
  }
  
  if (index < lastNumber) {
    let result = numbers[index] * numbers[index + 1]
  newNumbers.push(result)
  }
}

console.log(newNumbers)