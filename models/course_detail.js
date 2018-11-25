'use strict';
module.exports = (sequelize, DataTypes) => {
  const course_detail = sequelize.define('course_detail', {
    id: DataTypes.STRING,
    exercises_quiz: DataTypes.FLOAT,
    presentation: DataTypes.FLOAT,
    mid_exam: DataTypes.FLOAT,
    final_exam: DataTypes.FLOAT,
    average: DataTypes.FLOAT,
    course_id: DataTypes.STRING
  }, {});
  course_detail.associate = function(models) {
    // associations can be defined here
  };
  return course_detail;
};