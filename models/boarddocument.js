'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardDocument = sequelize.define('BoardDocument', {
    boarId: DataTypes.STRING,
    fcKK: DataTypes.STRING,
    fcKTP: DataTypes.STRING,
    fcAkte: DataTypes.STRING,
    photo: DataTypes.STRING,
    npwp: DataTypes.STRING
  }, {});
  BoardDocument.associate = function(models) {
    // associations can be defined here
  };
  return BoardDocument;
};