'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pertamanan = sequelize.define('Pertamanan', {
    nama_taman: DataTypes.STRING,
    nama_pelaksana: DataTypes.STRING,
    luas_taman: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    RT: DataTypes.STRING,
    RW: DataTypes.STRING,
    tahun_dibangun: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {});
  Pertamanan.associate = function(models) {
    // associations can be defined here
    Pertamanan.hasMany(models.Foto, { foreignKey: 'pertamananId',as: 'fotopertamanans',onDelete:'CASCADE',onUpdate:'CASCADE'});
    Pertamanan.hasMany(models.Cctv, { foreignKey: 'pertamananId',as: 'cctvpertamanans',onDelete:'CASCADE',onUpdate:'CASCADE'});
    Pertamanan.hasMany(models.Petugas, {foreignKey: 'pertamananId', as: 'petugas',onDelete:'CASCADE',onUpdate:'CASCADE'})
    Pertamanan.hasMany(models.PeralatanPemelihara, {foreignKey: 'pertamananId', as: 'peralatanpemeliharans',onDelete:'CASCADE',onUpdate:'CASCADE'})
    Pertamanan.hasMany(models.Hardscape, {foreignKey: 'pertamananId', as: 'hardscapes',onDelete:'CASCADE',onUpdate:'CASCADE'})
    Pertamanan.hasMany(models.Softscape, {foreignKey: 'pertamananId', as: 'softscapes',onDelete:'CASCADE',onUpdate:'CASCADE'})

  };
  return Pertamanan;
};
