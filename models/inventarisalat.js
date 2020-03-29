'use strict';
module.exports = (sequelize, DataTypes) => {
  const InventarisAlat = sequelize.define('InventarisAlat', {
    nama_alat: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    permukimanId: DataTypes.INTEGER
  }, {});
  InventarisAlat.associate = function(models) {
    // associations can be defined here
    InventarisAlat.Permukiman = InventarisAlat.belongsTo(models.Permukiman, {foreignKey: 'permukimanId', as: 'permukiman',onDelete: 'cascade',onUpdate:'cascade'});
  };
  return InventarisAlat;
};
