'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    username: DataTypes.STRING(20),
    password: DataTypes.STRING(20),
    roleId: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};