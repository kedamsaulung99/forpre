'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  queryInterface.addConstraint('course_details', ['course_id']{
    type: 'foreign key',
    name: 'fk_course-course_detail',
    references: {
      table: 'courses',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
   })
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
