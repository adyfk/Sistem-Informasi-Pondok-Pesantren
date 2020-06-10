'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassDetail = sequelize.define('ClassDetail', {
    id:{
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    classId: DataTypes.STRING(50),
    cost: DataTypes.INTEGER
  }, {
    updatedAt: false
  });
  ClassDetail.associate = function(models) {
    ClassDetail.belongsTo(models.Class, {
      foreignKey: 'classId',
      sourceKey: 'id'
    })
  };
  return ClassDetail;
};