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

// 1

const firstPeopleBorn1947 = books.find(({ author: { birthYear } }) => birthYear === 1947);

// console.log(firstPeopleBorn1947);

// 2

const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach(({ name }) => {
    if (!nameBook || name.length < nameBook.length) {
      nameBook = name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

// console.log(smallerName());

// 3

const getNamedBook = () => books.find(({ name }) => name.length === 26);

// console.log(getNamedBook());

// 4

const booksOrderedByReleaseYearDesc = () => {
  const copyBooks = [...books];
  return copyBooks.sort((a, b) => b.releaseYear - a.releaseYear);
};

// console.log(booksOrderedByReleaseYearDesc());

// 5

const everyoneWasBornOnSecXX = () => books.every(({ author: { birthYear } }) => birthYear > 1900 && birthYear < 2001);

// console.log(everyoneWasBornOnSecXX());

// 6

const someBookWasReleaseOnThe80s = () => books.some(({ releaseYear }) => releaseYear > 1979 || releaseYear < 1981);

// console.log(someBookWasReleaseOnThe80s());

// 7

const authorUnique = () => {
  return books.every((every) => !books.some(({ author }) => every.author.birthYear === author.birthYear && every.author.name !== author.name))
}

console.log(authorUnique());
