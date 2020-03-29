'use strict';
module.exports = (sequelize, DataTypes) => {
  const PeralatanPemelihara = sequelize.define('PeralatanPemelihara', {
    nama_alat: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    merk: DataTypes.STRING,
    tahun_diperoleh: DataTypes.STRING,
    kondisi: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    pertamananId: DataTypes.INTEGER
  }, {});
  PeralatanPemelihara.associate = function(models) {
    // associations can be defined here
    PeralatanPemelihara.belongsTo(models.Pertamanan, {foreignKey: 'pertamananId', as: 'pertamanan',onDelete: 'cascade',onUpdate:'cascade'});
  };
  return PeralatanPemelihara;
};
