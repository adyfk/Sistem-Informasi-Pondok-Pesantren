'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassDetail = sequelize.define('ClassDetail', {
    classId: DataTypes.STRING
  }, {
    updatedAt: false
  });
  ClassDetail.associate = function(models) {
    // associations can be defined here
  };
  return ClassDetail;
};