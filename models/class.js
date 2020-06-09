'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    title: DataTypes.STRING
  }, {
    timestamps: false
  });
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};