// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function higherName(array) {
  let name = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > name.length) {
      name = array[index];
    }
  }
  console.log(name);
  return name;
}

higherName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Ronaldinho'])