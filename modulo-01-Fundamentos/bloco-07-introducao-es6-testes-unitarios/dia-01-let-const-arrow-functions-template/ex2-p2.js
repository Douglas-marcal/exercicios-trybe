const longestWord = (string) => {
  let length = 0;
  let word = '';
  const words = string.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    if (words[index].length > length) {
      length = words[index].length;
      word = words[index];
    }
  }
  console.log(length);
  console.log(word);
  return word;
}


longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'