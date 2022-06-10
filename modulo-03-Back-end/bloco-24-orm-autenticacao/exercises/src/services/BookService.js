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

function updateBook(id, bookInfo) {
  return Book.update({ ...bookInfo }, {
    where: {
      id
    },
  });
}

module.exports = {
  getAll,
  getById,
  addBook,
  updateBook,
};
