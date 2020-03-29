'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perumahan = sequelize.define('Perumahan', {
    nama_perumahan: DataTypes.STRING,
    nama_pengembang: DataTypes.STRING,
    luas_perumahan: DataTypes.STRING,
    jumlah_rumah : DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    RT: DataTypes.STRING,
    RW: DataTypes.STRING,
    status: DataTypes.STRING,
    tgl_serah_terima: DataTypes.DATE,
    no_bast: DataTypes.STRING,
    sph: DataTypes.STRING,
    jumlah_psu: DataTypes.STRING,
    keterangan: DataTypes.STRING,
  }, {});
  Perumahan.associate = function(models) {
    // associations can be defined here
    Perumahan.hasMany(models.Foto, { foreignKey: 'perumahanId',as: 'fotos'});
    Perumahan.hasMany(models.Sarana, { foreignKey: 'perumahanId',as: 'saranas',onDelete:'CASCADE'});
    Perumahan.hasMany(models.JalanSaluran, { foreignKey: 'perumahanId',as: 'jalansalurans'});
    Perumahan.hasMany(models.Koordinat, { foreignKey: 'perumahanId',as: 'koordinats'});
    Perumahan.hasMany(models.Taman, { foreignKey: 'perumahanId',as: 'tamans'});
    Perumahan.hasMany(models.Cctv, { foreignKey: 'perumahanId',as: 'cctvs'});
  };
  return Perumahan;
};
