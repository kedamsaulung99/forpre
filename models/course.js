'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    id: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    credit: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    total_star: DataTypes.INTEGER,
    total_evaluate: DataTypes.INTEGER
  }, {});
  course.associate = function(models) {
    // associations can be defined here
  };
  return course;
};