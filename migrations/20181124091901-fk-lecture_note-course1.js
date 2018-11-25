'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  queryInterface.addConstraint('course_score_students', ['student_id']{
    type: 'foreign key',
    name: 'fk_course-score-student',
    references: {
      table: 'students',
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
