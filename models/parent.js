'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    studentId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    name: DataTypes.STRING(50),
    dateOfBirth: DataTypes.DATE,
    address: DataTypes.STRING(35),
    dorp: DataTypes.STRING(25),
    district: DataTypes.STRING(25),
    regency: DataTypes.STRING(25),
    province: DataTypes.STRING(25),
    postCode: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING(25),
    fcKTP: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  Parent.associate = function(models) {
    // associations can be defined here
  };
  return Parent;
};