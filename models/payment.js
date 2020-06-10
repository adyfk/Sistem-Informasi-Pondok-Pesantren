'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    studentId: DataTypes.STRING,
    paymentTypeId: DataTypes.STRING,
    description: DataTypes.STRING,
    bill: DataTypes.INTEGER
  }, {
    updatedAt:false
  });
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};