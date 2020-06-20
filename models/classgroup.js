'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassGroup = sequelize.define('ClassGroup', {
    id: {
      primaryKey : true,
      type: DataTypes.STRING(50)
    },
    classId: DataTypes.STRING(50),
    gender: DataTypes.STRING(2)
  }, {
    timestamps: false
  });
  ClassGroup.associate = function(models) {
    ClassGroup.hasMany(models.StudentClass,{
      key:'id',
      foreignKey: 'classGroupId'
    })
  };
  return ClassGroup;
};