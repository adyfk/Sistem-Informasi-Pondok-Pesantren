'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoleDetail = sequelize.define('RoleDetail', {
    roleId: DataTypes.STRING,
    appId: DataTypes.STRING
  }, {});
  RoleDetail.associate = function(models) {
    // associations can be defined here
  };
  return RoleDetail;
};