'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permukiman = sequelize.define('Permukiman', {
    nama_tpu: DataTypes.STRING,
    luas_tpu: DataTypes.STRING,
    tahun_digunakan: DataTypes.STRING,
    data_tampung_tpu: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    RT: DataTypes.STRING,
    RW: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {});
  Permukiman.associate = function(models) {
    // associations can be defined here
    Permukiman.hasMany(models.Pengelola, { foreignKey: 'permukimanId',as: 'pengelolas'});
    Permukiman.hasMany(models.Foto, { foreignKey: 'permukimanId',as: 'fotos',onDelete:'CASCADE'});
    Permukiman.hasMany(models.InventarisAlat, { foreignKey: 'permukimanId',as: 'inventarisalats'});
    Permukiman.hasMany(models.Status, { foreignKey: 'permukimanId',as: 'status'});
    Permukiman.hasMany(models.Koordinat, { foreignKey: 'permukimanId',as: 'koordinats'});
    Permukiman.hasMany(models.Cctv, { foreignKey: 'permukimanId',as: 'cctvs'});
  };
  return Permukiman;
};
