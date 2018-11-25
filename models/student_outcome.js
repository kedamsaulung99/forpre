'use strict';
module.exports = (sequelize, DataTypes) => {
  const student_outcome = sequelize.define('student_outcome', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  student_outcome.associate = function(models) {
    // associations can be defined here
  };
  return student_outcome;
};