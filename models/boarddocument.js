'use strict';
module.exports = (sequelize, DataTypes) => {
  const BoardDocument = sequelize.define('BoardDocument', {
    boardId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    fcKK: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
    fcKTP: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
    fcAkte: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
    photo: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
    fcNpwp: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
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