const routes = require('express').Router();
const BooksController = require('../controllers/BooksController');

routes.get('/', BooksController.getAll);
routes.get('/:id', BooksController.getById);
routes.post('/', BooksController.addBook);
routes.put('/:id', BooksController.updateBook);
routes.delete('/:id', BooksController.deleteBook);

module.exports = routes;
