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

// Adicione o código do exercício aqui:

// 1

const formatedBookNames = () => books.map(({ name, genre, author }) => `${name} - ${genre} - ${author.name}`);

// console.log(formatedBookNames());

// 2

const nameAndAge = () => books.map(({ releaseYear, author: { name, birthYear}}) => (
  {
    age: releaseYear - birthYear,
    name,
  }
)).sort((a, b) => a.age - b.age);

// console.log(nameAndAge());

// 3

const fantasyOrScienceFiction = () => books.filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica')

// console.log(fantasyOrScienceFiction());

// 4

const oldBooksOrdered = () => books.filter(({ releaseYear }) => 2022 - releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered());

// 5

const fantasyOrScienceFictionAuthors = () => books.filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica').map(({ author: { name }}) => name).sort();

// console.log(fantasyOrScienceFictionAuthors());

// 6

const oldBooks = () => books.filter(({ releaseYear }) => 2022 - releaseYear > 60).map(({ name }) => name);

// console.log(oldBooks());

// 7

const authorWith3DotsOnName = () => {
  const dotsOnName = books.filter(({ author: { name } }) => name.includes('.')).map(({ author: { name } } ) => name)
  let book;
  dotsOnName.forEach((names) => {
    let counter = 0
    names.split(' ').forEach((name) => {
      if (name.includes('.')) {
        counter += 1;
      }
      if (counter === 3) {
        book = names
      }
    });
  });
  return books.find(({ author: { name } }) => name === book).name;
};

console.log(authorWith3DotsOnName());
