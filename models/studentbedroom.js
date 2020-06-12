'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentBedroom = sequelize.define('StudentBedroom', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    bedroomId: DataTypes.STRING(50),
    studentId: DataTypes.STRING(50),
    studentIn: DataTypes.DATE,
    studentOut: {
      allowNull:true,
      type: DataTypes.DATE}
  }, {
    timestamps: false
  });
  StudentBedroom.associate = function(models) {
    StudentBedroom.belongsTo(models.Student,{
      foreignKey: 'studentId',
      sourceKey: 'id'
    })
    StudentBedroom.belongsTo(models.Bedroom,{
      foreignKey: 'bedroomId',
      sourceKey: 'id'
    })
  };
  return StudentBedroom;
};