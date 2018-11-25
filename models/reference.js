'use strict';
module.exports = (sequelize, DataTypes) => {
  const reference = sequelize.define('reference', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  reference.associate = function(models) {
    // associations can be defined here
  };
  return reference;
};