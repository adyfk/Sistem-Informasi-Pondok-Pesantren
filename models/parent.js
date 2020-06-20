'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    studentId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
    dateOfBirth: {
      allowNull: true,
      type: DataTypes.DATE
    },
    address: {
      allowNull: true,
      type: DataTypes.STRING(35)
    },
    dorp: {
      allowNull: true,
      type: DataTypes.STRING(25)
    },
    district: {
      allowNull: true,
      type: DataTypes.STRING(25)
    },
    regency: {
      allowNull: true,
      type: DataTypes.STRING(25)
    },
    province: {
      allowNull: true,
      type: DataTypes.STRING(25)
    },
    postCode: {
      allowNull: true,
      type: DataTypes.STRING(6)
    },
    phoneNumber: {
      allowNull: true,
      type: DataTypes.STRING(25)
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING(45)
    },
    fcKTP: {
      allowNull: true,
      type: DataTypes.STRING(50)
    }
  }, {
    timestamps: false
  });
  Parent.associate = function(models) {
    Parent.belongsTo(models.Student,{
      foreignKey: 'studentId',
      sourceKey: 'id'
    })
  };
  return Parent;
};