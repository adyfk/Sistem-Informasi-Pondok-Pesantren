'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bedroom = sequelize.define('Bedroom', {
    title: DataTypes.STRING,
    gender: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Bedroom.associate = function(models) {
    // associations can be defined here
  };
  return Bedroom;
};