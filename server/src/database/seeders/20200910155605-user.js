// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };



module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        firstname: 'Ally',
        lastname: 'Bomayee',
        email: 'kipenzi@chawatu.com',
        password: '123abc',
        address: 'Home',
        phonenumber: 123456789,
        role: 'master',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Ally',
        lastname: 'Bomayee',
        email: 'kipenzi@chawatu.com',
        password: '123abc',
        address: 'Home',
        phonenumber: 123456789,
        role: 'admin',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};

// database/seeds/xxxx-user.js
