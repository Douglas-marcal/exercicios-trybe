const routes = require('express').Router();
const BooksController = require('../controllers/BooksController');

routes.get('/', BooksController.getAll);

module.exports = routes;
