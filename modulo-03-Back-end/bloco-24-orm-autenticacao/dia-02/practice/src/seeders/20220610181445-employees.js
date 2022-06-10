'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Employees',
    [
      {
        first_name: 'Marcos',
        last_name: 'Zucker',
        age: 49,
      },
      {
        first_name: 'Frederico',
        last_name: 'Mercurio',
        age: 19,
      },
      {
        first_name: 'Ayrton',
        last_name: 'Keno',
        age: 51,
      },
      {
        first_name: 'Robin',
        last_name: 'Mathias',
        age: 63,
      },
    ],
    {},
  );
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};