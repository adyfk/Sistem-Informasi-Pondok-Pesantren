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
    fcNpwp: DataTypes.STRING(50)
  }, {
    timestamps: false,
  });
  BoardDocument.removeAttribute('id')
  BoardDocument.associate = function (models) {
    BoardDocument.belongsTo(models.Board, {
      foreignKey: 'boardId',
      sourceKey: 'id'
    })
  };
  return BoardDocument;
};