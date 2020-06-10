'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    userId: DataTypes.STRING(50),
    name: DataTypes.STRING(50),
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING(2),
    address: DataTypes.STRING(70),
    dorp: DataTypes.STRING(30),
    district: DataTypes.STRING(30),
    regency: DataTypes.STRING(30),
    province: DataTypes.STRING(30),
    postCode: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING(30)
  }, {
    timestamps: false
  });
  Board.associate = function(models) {
    // associations can be defined here
  };
  return Board;
};