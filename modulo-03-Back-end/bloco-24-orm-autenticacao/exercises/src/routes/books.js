const routes = require('express').Router();
const BooksController = require('../controllers/BooksController');

routes.get('/', BooksController.getAll);
routes.get('/:id', BooksController.getById);
routes.post('/', BooksController.addBook);

module.exports = routes;
