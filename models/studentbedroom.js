'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentBedroom = sequelize.define('StudentBedroom', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    studentId: DataTypes.STRING(50),
    studentIn: DataTypes.DATE,
    studentOut: DataTypes.DATE
  }, {
    timestamps: false
  });
  StudentBedroom.associate = function(models) {
    // associations can be defined here
  };
  return StudentBedroom;
};