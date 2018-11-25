'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('course_details', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      exercisesquiz: {
        type: Sequelize.FLOAT
      },
      presentation: {
        type: Sequelize.FLOAT
      },
      mid_exam: {
        type: Sequelize.FLOAT
      },
      final_exam: {
        type: Sequelize.FLOAT
      },
      average: {
        type: Sequelize.FLOAT
      },
      course_id: {
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
    return queryInterface.dropTable('course_details');
  }
};