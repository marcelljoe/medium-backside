'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: "ONEZERO"
      },
        {
          id: 2,
          name: "ELEMENTAL"
        }, 
        {
          id: 3,
          name: "GEN"
        },
        {
          id: 4,
          name: "ZORA"
        },
        {
          id: 5,
          name: "FORGE"
        },
        {
          id: 6,
          name: "HUMAN PARTS"
        },
        {
          id: 7,
          name: "MARKER"
        },
        {
          id: 8,
          name: "LEVEL"
        },
        {
          id: 9,
          name: "HEATED"
        },
        {
          id: 10,
          name: "MODELLING"
        },
        {
          id: 11,
          name: "MORE"
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
