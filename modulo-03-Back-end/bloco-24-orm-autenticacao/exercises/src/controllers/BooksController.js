const bookService = require('../services/BookService');

async function getAll(_request, response) {
  const books = await bookService.getAll();

  response.status(200).json(books);
}

module.exports = {
  getAll,
};
