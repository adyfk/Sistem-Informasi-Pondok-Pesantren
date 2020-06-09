'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    studentId: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    description: DataTypes.STRING,
    bill: DataTypes.NUMBER,
    integerdAt: DataTypes.DATE
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};