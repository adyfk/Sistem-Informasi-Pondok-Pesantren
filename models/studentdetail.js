'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentDetail = sequelize.define('StudentDetail', {
    studentId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    generationId: {
      unique: true,
      type: DataTypes.STRING(50)
    }
  }, {
    updatedAt:false
  });
  StudentDetail.associate = function(models) {
    // associations can be defined here
  };
  return StudentDetail;
};