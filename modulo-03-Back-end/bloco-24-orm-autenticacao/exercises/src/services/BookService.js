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

function deleteBook(id) {
  return Book.destroy({
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
  deleteBook,
};
