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

async function addBook(request, response) {
  const { title, author, pageQuantity } = request.body;

  const bookInfo = { title, author, pageQuantity };

  const insertedBook = await bookService.addBook(bookInfo);

  const message = {
    id: insertedBook.id,
    title,
    author,
    pageQuantity,
  };

  response.status(201).json(message);
}

async function updateBook(request, response) {
  const { params: { id }, body } = request

  const [book] = await bookService.updateBook(id, body);

  if (!book) return response.status(404).json({ message: 'Book not found' });

  response.status(200).json({ message: 'Book updated' });
}

async function deleteBook(request, response) {
  const { id } = request.params;

  const bookDeleted = await bookService.deleteBook(id);

  if (!bookDeleted) return response.status(404).json({ message: 'Book not found' });

  response.status(200).json({ message: 'Book deleted' })
}

module.exports = {
  getAll,
  getById,
  addBook,
  updateBook,
  deleteBook,
};
