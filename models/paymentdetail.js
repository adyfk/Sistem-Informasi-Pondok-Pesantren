'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentDetail = sequelize.define('PaymentDetail', {
    paymentId: DataTypes.STRING(50),
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    paid: DataTypes.INTEGER
  }, {
    updatedAt: false
  });
  PaymentDetail.associate = function (models) {
    PaymentDetail.belongsTo(models.Payment, {
      foreignKey: 'paymentId',
      sourceKey: 'id'
    })
  };
  PaymentDetail.removeAttribute('id')
  return PaymentDetail;
};