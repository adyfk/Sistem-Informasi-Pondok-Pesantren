'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClassDetail = sequelize.define('ClassDetail', {
    classId: {
      unique: true,
      type: DataTypes.STRING(50)
    }
  }, {
    updatedAt: false
  });
  ClassDetail.associate = function(models) {
    // associations can be defined here
  };
  return ClassDetail;
};