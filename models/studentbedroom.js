'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentBedroom = sequelize.define('StudentBedroom', {
    studentId: DataTypes.STRING,
    studentIn: DataTypes.DATE,
    studentOut: DataTypes.DATE
  }, {});
  StudentBedroom.associate = function(models) {
    // associations can be defined here
  };
  return StudentBedroom;
};