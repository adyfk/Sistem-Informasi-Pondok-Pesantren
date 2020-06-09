'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    userId: DataTypes.STRING,
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    dorp: DataTypes.STRING,
    district: DataTypes.STRING,
    regency: DataTypes.STRING,
    province: DataTypes.STRING,
    postCode: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    timestamps: false
  });
  Board.associate = function(models) {
    // associations can be defined here
  };
  return Board;
};