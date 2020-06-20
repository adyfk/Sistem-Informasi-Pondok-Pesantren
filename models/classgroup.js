'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('ClassGroup', {
    id: {
      primaryKey : true,
      type: DataTypes.STRING(50)
    },
    classId: DataTypes.STRING(50),
    gender: DataTypes.STRING(2)
  }, {
    timestamps: false
  });
  Class.associate = function(models) {
    Class.hasMany(models.StudentClass,{
      key:'id',
      foreignKey: 'classId'
    })
  };
  return ClassGroup;
};