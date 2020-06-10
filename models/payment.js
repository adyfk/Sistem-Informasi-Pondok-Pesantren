'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    studentId: DataTypes.STRING(50),
    paymentTypeId: DataTypes.STRING(50),
    description: DataTypes.STRING(30),
    bill: DataTypes.INTEGER
  }, {
    updatedAt:false
  });
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};