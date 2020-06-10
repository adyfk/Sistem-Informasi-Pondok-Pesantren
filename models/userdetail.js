'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserDetail = sequelize.define('UserDetail', {
    userId: DataTypes.STRING(50),
    latestLogin: { 
      type: DataTypes.DATE,
      allowNull:true 
    }, 
  }, {
    timestamps: false
  });
  UserDetail.associate = function(models) {
    UserDetail.belongsTo(models.Student,{
      foreignKey:'studentId',
      key:'id' 
    })
  };
  return UserDetail;
};