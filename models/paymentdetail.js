'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentDetail = sequelize.define('PaymentDetail', {
    paymentId: DataTypes.STRING(50),
    description: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    paid: DataTypes.INTEGER
  }, {
    updatedAt: false
  });
  PaymentDetail.removeAttribute('id')
  PaymentDetail.associate = function (models) {
    PaymentDetail.belongsTo(models.Payment, {
      foreignKey: 'paymentId',
      sourceKey: 'id'
    })
  };
  return PaymentDetail;
};