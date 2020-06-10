'use strict';
module.exports = (sequelize, DataTypes) => {
  const GenerationDetail = sequelize.define('GenerationDetail', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    generationId: DataTypes.STRING(50),
    title: DataTypes.STRING(20),
    description: DataTypes.STRING(30),
    cost: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  GenerationDetail.associate = function(models) {
    GenerationDetail.belongsTo(models.Generation,{
      foreignKey: 'generationId',
      sourceKey: 'id'
    })
  };
  return GenerationDetail;
};