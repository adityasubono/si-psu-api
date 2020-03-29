'use strict';
module.exports = (sequelize, DataTypes) => {
  const Taman = sequelize.define('Taman', {
    nama_taman: DataTypes.STRING,
    luas_taman: DataTypes.STRING,
    foto_taman: DataTypes.STRING,
    kondisi: DataTypes.STRING,
    perumahanId: DataTypes.INTEGER,
  }, {});
  Taman.associate = function(models) {
    // associations can be defined here
    Taman.belongsTo(models.Perumahan, {foreignKey: 'perumahanId', as: 'perumahan',onDelete: 'cascade',onUpdate:'cascade'});
    Taman.hasMany(models.Koordinat, {foreignKey: 'tamanId',as: 'koordinattamans',onDelete:'CASCADE',onUpdate:'CASCADE'});
  };
  return Taman;
};
