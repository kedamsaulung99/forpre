'use strict';
module.exports = (sequelize, DataTypes) => {
  const lecture_note = sequelize.define('lecture_note', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    reference: DataTypes.STRING,
    course_id: DataTypes.STRING
  }, {});
  lecture_note.associate = function(models) {
    // associations can be defined here
  };
  return lecture_note;
};