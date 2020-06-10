'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentDetail = sequelize.define('PaymentDetail', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    paymentTypeId: DataTypes.STRING(50),
    description: DataTypes.STRING(50),
    paid: DataTypes.INTEGER
  }, {
    updatedAt:false
  });
  PaymentDetail.associate = function(models) {
    // associations can be defined here
  };
  return PaymentDetail;
};