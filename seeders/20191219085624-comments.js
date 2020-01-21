'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "comments",
        [
          {
            article_id: 1,
            comment: "That's good sh#t!!!",
            user_id: 1
          },
          {
            article_id: 1,
            comment: "That's awesome sh#t!!!",
            user_id: 2
          },
          {
            article_id: 1,
            comment: "That's unbelieveable!!!",
            user_id: 3
          }
        ],
        {}
      );
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
