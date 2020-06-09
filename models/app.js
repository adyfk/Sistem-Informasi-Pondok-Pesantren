'use strict';
module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define('App', {
    roleId: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  App.associate = function(models) {
    // associations can be defined here
  };
  return App;
};