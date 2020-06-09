'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    studentId: DataTypes.STRING,
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    address: DataTypes.STRING,
    dorp: DataTypes.STRING,
    district: DataTypes.STRING,
    regency: DataTypes.STRING,
    province: DataTypes.STRING,
    postCode: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    fcKTP: DataTypes.STRING
  }, {});
  Parent.associate = function(models) {
    // associations can be defined here
  };
  return Parent;
};