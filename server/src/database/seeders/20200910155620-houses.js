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
    'houses',
    [
      {
        image: 'Ally',
        description: 'Bomayee',
        location: 'kipenzi@chawatu.com',
        numberofbedrooms: '123abc',
        numberofbathrooms: 'Home',
        status: 'Chateau',
        houseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: 'Ally',
        description: 'Bomayee',
        location: 'kipenzi@chawatu.com',
        numberofbedrooms: '123abc',
        numberofbathrooms: 'Home',
        status: 'Chateau',
        houseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('houses', null, {}),
};

// database/seeds/xxxx-houses.js