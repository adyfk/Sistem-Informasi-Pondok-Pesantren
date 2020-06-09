'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    timestamps: false
  });
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};