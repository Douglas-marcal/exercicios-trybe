const sortArray = () => {
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  for (let index = 1; index < oddsAndEvens.length; index += 1) {
    for (let secondIndex = 0; secondIndex < oddsAndEvens.length; secondIndex += 1) {
      if (oddsAndEvens[secondIndex] > oddsAndEvens[index]) {
        let swap = oddsAndEvens[secondIndex];
        oddsAndEvens[secondIndex] = oddsAndEvens[index];
        oddsAndEvens[index] = swap;
      }
    }
  }
  return oddsAndEvens
}

console.log(`Os números ${sortArray()} se encontram ordenados de forma crescente!`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b)

console.log(oddsAndEvens)