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
    postCode: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING(30)
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