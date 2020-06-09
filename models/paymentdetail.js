'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentDetail = sequelize.define('PaymentDetail', {
    paymentTypeId: DataTypes.STRING,
    description: DataTypes.STRING,
    paid: DataTypes.NUMBER,
    createdAt: DataTypes.DATE
  }, {});
  PaymentDetail.associate = function(models) {
    // associations can be defined here
  };
  return PaymentDetail;
};