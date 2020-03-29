'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pengelola = sequelize.define('Pengelola', {
    nama: DataTypes.STRING,
    umur: DataTypes.STRING,
    pendidikan: DataTypes.STRING,
    tugas: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    permukimanId: DataTypes.INTEGER,
  }, {});
  Pengelola.associate = function(models) {
    // associations can be defined here
    Pengelola.belongsTo(models.Permukiman, {foreignKey: 'permukimanId', as: 'permukiman',onDelete: 'cascade',onUpdate:'cascade'})
  };
  return Pengelola;
};
