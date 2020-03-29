'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_foto: {
        type: Sequelize.STRING
      },
      path_foto: {
        type: Sequelize.STRING
      },
      perumahanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Perumahan 1:1
          model: 'Perumahans',
          key: 'id'
        }
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
    return queryInterface.dropTable('Fotos');
  }
};
