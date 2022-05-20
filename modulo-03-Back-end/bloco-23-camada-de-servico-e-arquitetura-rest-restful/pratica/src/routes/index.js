const express = require('express');
const booksModel = require('../../model/books');

const routes = express.Router();

routes.get('/books', async (_request, response) => {
  const books = await booksModel.getAll();

  response.status(200).json(books);
});

routes.get('/books/:id', async (request, response) => {
  const { id } = request.params;

  const books = await booksModel.getByAuthorId(id);


  if (!books) return response.status(404).json({ message: 'Book not found' });

  response.status(200).json(books);
});

routes.post('/books', async (request, response) => {
  const { title, author_id } = request.body;

  const invalidBook = await booksModel.isInvalidBook(title, author_id);

  if (invalidBook) return response.status(404).json({ message: 'Invalid book' });

  await booksModel.addBook(title, author_id);

  response.status(201).json({ message: 'Book added successfully' });
});

module.exports = routes;
