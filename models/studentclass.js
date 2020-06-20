'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentClass = sequelize.define('StudentClass', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    studentId: DataTypes.STRING(50),
    classGroupId: DataTypes.STRING(50),
    studentIn: DataTypes.DATE,
    studentOut: {
      allowNull:true,
      type: DataTypes.DATE
    }
  }, {
    timestamps: false
  });
  StudentClass.associate = function(models) {
    StudentClass.belongsTo(models.Student,{
      foreignKey: 'studentId',
      sourceKey: 'id'
    })
    StudentClass.belongsTo(models.ClassGroup,{
      foreignKey: 'classGroupId',
      sourceKey: 'id'
    })
  };
  return StudentClass;
};