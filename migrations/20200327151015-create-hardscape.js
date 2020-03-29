'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hardscapes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_alat: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.STRING
      },
      merk: {
        type: Sequelize.STRING
      },
      tahun_perolehan: {
        type: Sequelize.STRING
      },
      kondisi: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hardscapes');
  }
};