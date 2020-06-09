'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserDetail = sequelize.define('UserDetail', {
    userId: DataTypes.STRING,
    latestLogin: DataTypes.DATE
  }, {});
  UserDetail.associate = function(models) {
    // associations can be defined here
  };
  return UserDetail;
};