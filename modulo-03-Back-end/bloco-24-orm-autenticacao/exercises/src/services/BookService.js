const { Book } = require('../models');

function getAll() {
  return Book.findAll();
}

function getById(id) {
  return Book.findByPk(id);
}

function addBook(bookInfo) {
  return Book.create({ ...bookInfo });
}

module.exports = {
  getAll,
  getById,
  addBook,
};
