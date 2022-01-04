// 1

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);

// console.log(flatten())

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2

const reduceNames = () => books.reduce((acc, { author: { name } }, index, array) => 
  (index === array.length - 1)
    ? `${acc} ${name}.`
    : `${acc} ${name},`
    , ''
);

// console.log(reduceNames());

// 3

// const expectedResult = 43;

const averageAge = () => 
  books.reduce(
    (acc, { author: { birthYear }, releaseYear }) =>
      acc + (releaseYear - birthYear), 0
) / books.length;

// console.log(averageAge());

// 4

const longestNamedBook = () => books.reduce((higher, book) => (higher.name.length > book.name.length) ? higher : book);

// console.log(longestNamedBook());

// 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => 
  names.reduce((counter, name) => 
    counter + name.split('').reduce((wordsCounter, letter) =>
      (letter.toLowerCase() === 'a')
        ? wordsCounter + 1
        : wordsCounter, 0
    ), 0
);

// console.log(containsA());

// 6.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => students.map((student, index) => (
  {
    student,
    averageAge: grades[index].reduce((sum, current) => sum + current, 0) / grades[index].length, 
  }
));
// -------------------------------------------------------------------------------------------------//
const studentAverage = () => students.reduce((accumulator, currentValue, index) => {
  const result = {
    name: currentValue,
    average: grades[index].reduce((acc, current) => acc + current) / grades[index].length
  }
  accumulator.push(result)
  return accumulator
}, []);

console.log(studentAverage());
