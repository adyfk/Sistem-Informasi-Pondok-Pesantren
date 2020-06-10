'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoleDetail = sequelize.define('RoleDetail', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    roleId: DataTypes.STRING(50),
    appId: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  RoleDetail.associate = function(models) {
    // associations can be defined here
  };
  return RoleDetail;
};