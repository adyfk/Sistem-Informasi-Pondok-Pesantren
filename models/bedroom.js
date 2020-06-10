'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bedroom = sequelize.define('Bedroom', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    title: DataTypes.STRING(35),
    gender: DataTypes.STRING(2),
    capacity: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Bedroom.associate = function(models) {
    // associations can be defined here
  };
  return Bedroom;
};