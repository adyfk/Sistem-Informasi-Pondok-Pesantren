'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentDocument = sequelize.define('StudentDocument', {
    studentId: {
      unique: true,
      type: DataTypes.STRING(50)},
    fcKK: DataTypes.STRING(50),
    fcKTP: DataTypes.STRING(50),
    fcAkte: DataTypes.STRING(50),
    photo: DataTypes.STRING(50)
  }, {
    timestamps: false
  });
  StudentDocument.associate = function(models) {
    // associations can be defined here
  };
  return StudentDocument;
};