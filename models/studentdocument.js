'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentDocument = sequelize.define('StudentDocument', {
    studentId: DataTypes.STRING,
    fcKK: DataTypes.STRING,
    fcKTP: DataTypes.STRING,
    fcAkte: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  StudentDocument.associate = function(models) {
    // associations can be defined here
  };
  return StudentDocument;
};