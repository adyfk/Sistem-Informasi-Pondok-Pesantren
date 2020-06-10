'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    username: {
      type: DataTypes.STRING(30),
      unique: true,
    },
    password: DataTypes.STRING(50),
    roleId: DataTypes.STRING(50)
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