'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    userId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    name: DataTypes.STRING(50),
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING(2),
    address: DataTypes.STRING(35),
    dorp: DataTypes.STRING(25),
    district: DataTypes.STRING(25),
    regency: DataTypes.STRING(25),
    province: DataTypes.STRING(25),
    postCode: DataTypes.STRING(6),
    phoneNumber: DataTypes.STRING(25),
    email: DataTypes.STRING(45)
  }, {
    timestamps: false
  });
  Board.associate = function(models) {
    Board.hasOne(models.BoardDocument,{
      key:'id',
      foreignKey: 'boardId'
    })
    Board.belongsTo(models.User,{
      foreignKey: 'userId',
      sourceKey: 'id'
    })
  };
  return Board;
};