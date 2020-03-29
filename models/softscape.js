'use strict';
module.exports = (sequelize, DataTypes) => {
  const Softscape = sequelize.define('Softscape', {
    nama_alat: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    merk: DataTypes.STRING,
    tahun_perolehan: DataTypes.STRING,
    kondisi: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    pertamananId: DataTypes.INTEGER
  }, {});
  Softscape.associate = function(models) {
    // associations can be defined here
    Softscape.belongsTo(models.Pertamanan, {foreignKey: 'pertamananId', as: 'pertamanan'});
  };
  return Softscape;
};
