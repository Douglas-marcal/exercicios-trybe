const bookService = require('../services/BookService');

async function getAll(_request, response) {
  const books = await bookService.getAll();

  response.status(200).json(books);
}

async function getById(request, response) {
  const { id } = request.params;

  const book = await bookService.getById(id);

  if (!book) return response.status(404).json({ message: 'Book not found' });

  response.status(200).json(book);
}

module.exports = {
  getAll,
  getById,
};
