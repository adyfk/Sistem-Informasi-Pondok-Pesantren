'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentDetail = sequelize.define('PaymentDetail', {
    paymentTypeId: DataTypes.STRING,
    description: DataTypes.STRING,
    paid: DataTypes.INTEGER
  }, {
    updatedAt:false
  });
  PaymentDetail.associate = function(models) {
    // associations can be defined here
  };
  return PaymentDetail;
};