'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentDocument = sequelize.define('StudentDocument', {
    studentId: {
      unique: true,
      type: DataTypes.STRING(50)
    },
    fcKK: DataTypes.STRING(50),
    fcKTP: {
      allowNull: true,
      type: DataTypes.STRING(50)
    },
    fcAkte: DataTypes.STRING(50),
    photo: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  StudentDocument.removeAttribute('id')
  StudentDocument.associate = function(models) {
    StudentDocument.belongsTo(models.Student,{
      foreignKey: 'studentId',
      sourceKey: 'id'
    })
  };
  return StudentDocument;
};