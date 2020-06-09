'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentDetail = sequelize.define('StudentDetail', {
    studentId: DataTypes.STRING,
    generationId: DataTypes.STRING
  }, {});
  StudentDetail.associate = function(models) {
    // associations can be defined here
  };
  return StudentDetail;
};