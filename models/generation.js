'use strict';
module.exports = (sequelize, DataTypes) => {
  const Generation = sequelize.define('Generation', {
    id : {
      primaryKey: true,
      type: DataTypes.STRING(50)
    },
    title: DataTypes.STRING(20)
  }, {
    updatedAt: false
  });
  Generation.associate = function(models) {
    Generation.hasMany(models.GenerationDetail,{
      key:'id',
      foreignKey: 'generationId'
    })
  };
  return Generation;
};