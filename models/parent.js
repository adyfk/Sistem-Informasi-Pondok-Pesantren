'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    studentId: DataTypes.STRING(50),
    name: DataTypes.STRING(50),
    dateOfBirth: DataTypes.DATE,
    address: DataTypes.STRING(70),
    dorp: DataTypes.STRING(30),
    district: DataTypes.STRING(30),
    regency: DataTypes.STRING(30),
    province: DataTypes.STRING(30),
    postCode: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING(30),
    fcKTP: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  Parent.associate = function(models) {
    // associations can be defined here
  };
  return Parent;
};