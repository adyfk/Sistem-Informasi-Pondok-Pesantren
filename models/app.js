'use strict';
module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define('App', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    roleId: DataTypes.STRING(50),
    description: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  App.associate = function(models) {
    // associations can be defined here
  };
  return App;
};