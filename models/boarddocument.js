'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardDocument = sequelize.define('BoardDocument', {
    boardId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    fcKK: DataTypes.STRING(50),
    fcKTP: DataTypes.STRING(50),
    fcAkte: DataTypes.STRING(50),
    photo: DataTypes.STRING(50),
    npwp: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  BoardDocument.associate = function(models) {
    // associations can be defined here
  };
  return BoardDocument;
};