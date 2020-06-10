'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    userId: DataTypes.STRING(50),
    name: DataTypes.STRING(50),
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING(2),
    address: DataTypes.STRING(35),
    dorp: DataTypes.STRING(25),
    district: DataTypes.STRING(25),
    regency: DataTypes.STRING(25),
    province: DataTypes.STRING(25),
    postCode: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING(30)
  }, {
    timestamps: false
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};