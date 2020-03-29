'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hardscape = sequelize.define('Hardscape', {
    nama_alat: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    merk: DataTypes.STRING,
    tahun_perolehan: DataTypes.STRING,
    kondisi: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    pertamananId: DataTypes.INTEGER
  }, {});
  Hardscape.associate = function(models) {
    // associations can be defined here
    Hardscape.belongsTo(models.Pertamanan, {foreignKey: 'pertamananId', as: 'pertamanan'});
  };
  return Hardscape;
};
