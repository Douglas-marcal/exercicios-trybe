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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const formatedBookNames = () => books.map(({ name, genre, author }) => `${name} - ${genre} - ${author.name}`);

// console.log(formatedBookNames());

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

const nameAndAge = () => books.map(({ releaseYear, author: { name, birthYear}}) => (
  {
    age: releaseYear - birthYear,
    name,
  }
)).sort((a, b) => a.age - b.age);

// console.log(nameAndAge());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

const fantasyOrScienceFiction = () => books.filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica')

// console.log(fantasyOrScienceFiction());

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const oldBooksOrdered = () => books.filter(({ releaseYear }) => 2022 - releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered());

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = () => books.filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica').map(({ author: { name }}) => name).sort();

// console.log(fantasyOrScienceFictionAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = () => books.filter(({ releaseYear }) => 2022 - releaseYear > 60).map(({ name }) => name);

// console.log(oldBooks());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

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