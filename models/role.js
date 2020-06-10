'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    title: DataTypes.STRING(20),
    description: DataTypes.STRING(30)
  }, {
    timestamps: false
  });
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};