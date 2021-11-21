// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(string) {
  let arr = []
  for (let word of string) {
    arr.push(word)
  }
  let revert = arr.reverse()
  let compare = revert.join('')

  if (string.toLowerCase() === compare.toLowerCase()) {
    return true
  } else {
    return false
  }
  // console.log(compare)
  // let compare = revert.join()
  // console.log(compare)
}

console.log(palindromo('radar'))