'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',[
     {
       full_name: 'John Doe',
       email: 'john@email.com',
       created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
       updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
     {
       full_name: 'Tom Doe',
       email: 'tom@email.com',
       created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
       updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
     },
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
