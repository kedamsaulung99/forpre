'use strict';
module.exports = (sequelize, DataTypes) => {
  const coursescore_student = sequelize.define('coursescore_student', {
    id: DataTypes.STRING,
    exercises_quiz: DataTypes.INTEGER,
    presentation: DataTypes.INTEGER,
    mid_exam: DataTypes.INTEGER,
    final_exam: DataTypes.INTEGER,
    average: DataTypes.FLOAT,
    course_id: DataTypes.STRING,
    student_id: DataTypes.STRING
  }, {});
  coursescore_student.associate = function(models) {
    // associations can be defined here
  };
  return coursescore_student;
};