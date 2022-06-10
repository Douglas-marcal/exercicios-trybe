'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books', [
        {
          title: 'Livro um',
          author: 'um qualquer',
          page_quantity: 38,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Livro dois',
          author: 'dois qualquer',
          page_quantity: 47,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {},
    );
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
