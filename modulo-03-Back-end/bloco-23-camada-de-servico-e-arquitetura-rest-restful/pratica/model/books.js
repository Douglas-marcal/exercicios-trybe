const connection = require('../database');

async function getAll() {
  const [books] = await connection.execute('SELECT * FROM books;');

  return books;
}

async function getByAuthorId(author) {
  const [books] = await connection.execute('SELECT * FROM books WHERE author_id = ?', [author]);

  if (books.length === 0) return null;

  return books;
}

async function isInvalidBook(title, authorId) {
  if (!title || title.length < 3 || typeof title !== 'string') return true;

  const authorDoesNotExist = !(await getByAuthorId(authorId));

  console.log(authorDoesNotExist)
  
  if (authorDoesNotExist) return true;

  return false;
}

async function addBook(title, authorId) {
  return connection.execute('INSERT INTO books (title, author_id) VALUES (?, ?)', [title, authorId]);
}

module.exports = {
  getAll,
  getByAuthorId,
  addBook,
  isInvalidBook,
};
