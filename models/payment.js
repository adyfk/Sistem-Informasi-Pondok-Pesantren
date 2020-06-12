'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    studentId: DataTypes.STRING(50),
    paymentTypeId: DataTypes.STRING(50),
    description: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bill: DataTypes.INTEGER
  }, {
    updatedAt: false
  });
  Payment.associate = function (models) {
    Payment.hasMany(models.PaymentDetail, {
      key: 'id',
      foreignKey: 'paymentId'
    })
    Payment.belongsTo(models.Student, {
      foreignKey: 'studentId',
      sourceKey: 'id'
    })
    Payment.belongsTo(models.PaymentType, {
      foreignKey: 'paymentTypeId',
      sourceKey: 'id'
    })
  };
  return Payment;
};