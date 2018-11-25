'use strict';
module.exports = (sequelize, DataTypes) => {
  const syllabus = sequelize.define('syllabus', {
    id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  syllabus.associate = function(models) {
    // associations can be defined here
  };
  return syllabus;
};