'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentDetail = sequelize.define('PaymentDetail', {
    paymentTypeId: DataTypes.STRING,
    description: DataTypes.STRING,
    paid: DataTypes.INTEGER,
    createdAt: DataTypes.DATE
  }, {});
  PaymentDetail.associate = function(models) {
    // associations can be defined here
  };
  return PaymentDetail;
};