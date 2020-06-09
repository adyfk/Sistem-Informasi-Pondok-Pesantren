'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentType = sequelize.define('PaymentType', {
    description: DataTypes.STRING
  }, {
    timestamps: false
  });
  PaymentType.associate = function(models) {
    // associations can be defined here
  };
  return PaymentType;
};