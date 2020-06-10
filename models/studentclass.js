'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentClass = sequelize.define('StudentClass', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    studentId: DataTypes.STRING(50),
    classId: DataTypes.STRING(50),
    studentIn: DataTypes.DATE,
    studentOut: DataTypes.DATE
  }, {
    timestamps: false
  });
  StudentClass.associate = function(models) {
    // associations can be defined here
  };
  return StudentClass;
};