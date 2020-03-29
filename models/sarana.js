'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sarana = sequelize.define('Sarana', {
    nama_sarana: DataTypes.STRING,
    luas_sarana: DataTypes.STRING,
    foto_sarana: DataTypes.STRING,
    perumahanId: DataTypes.INTEGER,
    kondisi_sarana: DataTypes.STRING
  }, {});
  Sarana.associate = function(models) {
    // associations can be defined here
    Sarana.belongsTo(models.Perumahan, {foreignKey: 'perumahanId', as: 'perumahan',onDelete: 'cascade',onUpdate:'cascade'});
    Sarana.hasMany(models.Koordinat, {foreignKey: 'saranaId',as: 'koordinatsaranas',onDelete:'CASCADE',onUpdate:'CASCADE'});
  };
  return Sarana;
};
