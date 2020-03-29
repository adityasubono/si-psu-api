'use strict';
module.exports = (sequelize, DataTypes) => {
  const Petugas = sequelize.define('Petugas', {
    nama: DataTypes.STRING,
    umur: DataTypes.STRING,
    pendidikan_terakhir: DataTypes.STRING,
    tugas: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    pertamananId: DataTypes.INTEGER
  }, {});
  Petugas.associate = function(models) {
    // associations can be defined here
    Petugas.Pertamanan = Petugas.belongsTo(models.Pertamanan, {foreignKey: 'pertamananId', as: 'pertamanan'})
  };
  return Petugas;
};
