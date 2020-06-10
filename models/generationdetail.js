'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenerationDetail = sequelize.define('GenerationDetail', {
    id: {
      primarykey: true,
      type: DataTypes.STRING(50)
    },
    generationId: DataTypes.STRING(50),
    title: DataTypes.STRING(30),
    description: DataTypes.STRING(50),
    cost: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  GenerationDetail.associate = function(models) {
    // associations can be defined here
  };
  return GenerationDetail;
};