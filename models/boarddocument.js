'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardDocument = sequelize.define('BoardDocument', {
    boardId: DataTypes.STRING,
    fcKK: DataTypes.STRING,
    fcKTP: DataTypes.STRING,
    fcAkte: DataTypes.STRING,
    photo: DataTypes.STRING,
    npwp: DataTypes.STRING
  }, {
    timestamps: false
  });
  BoardDocument.associate = function(models) {
    // associations can be defined here
  };
  return BoardDocument;
};