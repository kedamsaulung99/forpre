'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.addConstraint('lecture_notes', ['course_id'],{
    type: 'foreign key',
    name: 'fk_lecture_note-course',
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
