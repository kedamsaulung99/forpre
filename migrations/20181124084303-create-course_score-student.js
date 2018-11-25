'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('course_score_students', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      exercises_quiz: {
        type: Sequelize.INTEGER
      },
      presentation: {
        type: Sequelize.INTEGER
      },
      mid_exam: {
        type: Sequelize.INTEGER
      },
      final_exam: {
        type: Sequelize.INTEGER
      },
      average: {
        type: Sequelize.FLOAT
      },
      course_id: {
        type: Sequelize.STRING
      },
      student_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coursescore_students');
  }
};