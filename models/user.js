'use strict';

const { uuid1 } = require("../utils/common");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    password: {
      type:DataTypes.STRING(50),
      allowNull: true,
    },
    roleId: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    User.hasOne(models.Student,{
      foreignKey: 'userId',
      ke: 'id'
    })
    User.hasOne(models.Board,{
      foreignKey: 'userId',
      key: 'id'
    })
    User.belongsTo(models.Role,{
      foreignKey: 'roleId',
      sourceKey: 'id'
    })
  };
  return User;
};