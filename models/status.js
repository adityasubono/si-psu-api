'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    operasional: DataTypes.STRING,
    kondisi: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    permukimanId: DataTypes.INTEGER
  }, {});
  Status.associate = function(models) {
    // associations can be defined here
    Status.Permukiman = Status.belongsTo(models.Permukiman, {foreignKey: 'permukimanId', as: 'permukiman',onDelete: 'cascade',onUpdate:'cascade'});

  };
  return Status;
};
