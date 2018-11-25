'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};