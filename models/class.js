'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    id: {
      primaryKey : true,
      type: DataTypes.STRING(50)
     },
    title: DataTypes.STRING(20)
  }, {
    timestamps: false
  });
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};