'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentDetail = sequelize.define('PaymentDetail', {
    paymentId: DataTypes.STRING(50),
    description: DataTypes.STRING(30),
    paid: DataTypes.INTEGER
  }, {
    updatedAt:false
  });
  PaymentDetail.associate = function(models) {
    PaymentDetail.belongsTo(models.Payment,{
      foreignKey: 'paymentId',
      sourceKey: 'id'
    })
  };
  return PaymentDetail;
};