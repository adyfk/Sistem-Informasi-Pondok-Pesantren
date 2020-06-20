'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    id: {
      primaryKey : true,
      type: DataTypes.STRING(50)
    },
    title: DataTypes.STRING(20),
    cost: DataTypes.INTEGER()
  }, {
    timestamps: false
  });
  Class.associate = function(models) {
    Class.hasMany(models.StudentClass,{
      key:'id',
      foreignKey: 'classId'
    })
  };
  return Class;
};