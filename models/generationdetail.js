'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenerationDetail = sequelize.define('GenerationDetail', {
    generationId: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  GenerationDetail.associate = function(models) {
    // associations can be defined here
  };
  return GenerationDetail;
};