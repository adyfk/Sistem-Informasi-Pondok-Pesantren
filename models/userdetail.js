'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserDetail = sequelize.define('UserDetail', {
    userId: DataTypes.STRING,
    latestLogin: { type: DataTypes.DATE, allowNull:true }, 
  }, {
    timestamps: false
  });
  UserDetail.associate = function(models) {
    // associations can be defined here
  };
  return UserDetail;
};