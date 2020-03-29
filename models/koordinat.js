'use strict';
module.exports = (sequelize, DataTypes) => {
  const Koordinat = sequelize.define('Koordinat', {
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    saranaId: DataTypes.INTEGER,
    jalanSaluranId: DataTypes.INTEGER,
    perumahanId: DataTypes.INTEGER,
    tamanId : DataTypes.INTEGER,
    permukimanId: DataTypes.INTEGER
  }, {});
  Koordinat.associate = function(models) {
    // associations can be defined here
    Koordinat.belongsTo(models.Sarana, {foreignKey: 'saranaId', as: 'sarana',onDelete: 'cascade',onUpdate:'cascade'});
    Koordinat.belongsTo(models.JalanSaluran, {foreignKey: 'jalanSaluranId', as: 'jalansaluran',onDelete: 'cascade',onUpdate:'cascade'})
    Koordinat.belongsTo(models.Perumahan,{foreignKey:'perumahanId', as:'perumahan',onDelete: 'cascade',onUpdate:'cascade'});
    Koordinat.belongsTo(models.Taman,{foreignKey:'tamanId', as:'taman',onDelete: 'cascade',onUpdate:'cascade'})
    Koordinat.belongsTo(models.Permukiman, {foreignKey: 'permukimanId', as: 'permukiman',onDelete: 'cascade',onUpdate:'cascade'});

  };
  return Koordinat;
};
