const factorialTernary = (number) => number > 1 ? number * factorialTernary(number - 1) : 1;

const factorialNormal = (number) => {
  let result = 1;
  for (let index = number; index > 1; index -= 1) {
    result *= index
  }
  return result
}

console.log(factorialTernary(5));
console.log(factorialNormal(5));