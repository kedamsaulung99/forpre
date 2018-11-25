'use strict';
module.exports = (sequelize, DataTypes) => {
  const lecturer = sequelize.define('lecturer', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
    department: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {});
  lecturer.associate = function(models) {
    // associations can be defined here
  };
  return lecturer;
};