'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentClass = sequelize.define('StudentClass', {
    studentId: DataTypes.STRING,
    classId: DataTypes.STRING,
    studentIn: DataTypes.DATE,
    studentOut: DataTypes.DATE
  }, {});
  StudentClass.associate = function(models) {
    // associations can be defined here
  };
  return StudentClass;
};