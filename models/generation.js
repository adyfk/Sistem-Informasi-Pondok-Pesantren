'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generation = sequelize.define('Generation', {
    title: DataTypes.STRING
  }, {
    timestamps: false
  });
  Generation.associate = function(models) {
    // associations can be defined here
  };
  return Generation;
};