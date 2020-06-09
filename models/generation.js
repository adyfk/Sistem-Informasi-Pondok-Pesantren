'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generation = sequelize.define('Generation', {
    title: DataTypes.STRING
  }, {});
  Generation.associate = function(models) {
    // associations can be defined here
  };
  return Generation;
};