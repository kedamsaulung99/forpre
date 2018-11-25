'use strict';
module.exports = (sequelize, DataTypes) => {
  const topic = sequelize.define('topic', {
    id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  topic.associate = function(models) {
    // associations can be defined here
  };
  return topic;
};