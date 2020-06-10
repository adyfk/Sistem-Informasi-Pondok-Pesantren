'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentType = sequelize.define('PaymentType', {
    id: {
      primaryKey: true,
      type : DataTypes.STRING(50)
    },
    title: {
      type : DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    timestamps: false
  });
  PaymentType.associate = function(models) {
    Board.hasMany(models.Payment,{
      key:'id',
      foreignKey: 'paymentTypeId'
    })
  };
  return PaymentType;
};