'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cctv = sequelize.define('Cctv', {
    nama_cctv: DataTypes.STRING,
    ip_cctv: DataTypes.STRING,
    video: DataTypes.STRING,
    perumahanId: DataTypes.INTEGER,
    pertamananId: DataTypes.INTEGER,
    permukimanId: DataTypes.INTEGER
  }, {});
  Cctv.associate = function(models) {
    // associations can be defined here
    Cctv.belongsTo(models.Perumahan, {foreignKey: 'perumahanId', as: 'perumahan',onDelete: 'cascade',onUpdate:'cascade'});
    Cctv.belongsTo(models.Pertamanan, {foreignKey: 'pertamananId', as: 'pertamanan',onDelete: 'cascade'});
    Cctv.belongsTo(models.Permukiman, {foreignKey: 'permukimanId', as: 'permukiman',onDelete: 'cascade',onUpdate:'cascade'});

  };
  return Cctv;
};
