'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentDetail = sequelize.define('StudentDetail', {
    studentId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    generationId: DataTypes.STRING(50),
  }, {
    timestamps: false
  });
  StudentDetail.removeAttribute('id')
  StudentDetail.associate = function(models) {
    StudentDetail.belongsTo(models.Student,{
      foreignKey: 'studentId',
      sourceKey: 'id'
    })
    StudentDetail.belongsTo(models.Generation,{
      foreignKey: 'generationId',
      sourceKey: 'id'
    })
  };
  return StudentDetail;
};