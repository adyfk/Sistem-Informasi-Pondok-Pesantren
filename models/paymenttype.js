'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentType = sequelize.define('PaymentType', {
    id: {
      primarykey: true,
      type : DataTypes.STRING(50)
    },
    description: DataTypes.STRING(30)
  }, {
    timestamps: false
  });
  PaymentType.associate = function(models) {
    // associations can be defined here
  };
  return PaymentType;
};