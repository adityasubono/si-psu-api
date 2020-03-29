'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Saranas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_sarana: {
        type: Sequelize.STRING
      },
      luas_sarana: {
        type: Sequelize.STRING
      },
      foto_sarana: {
        type: Sequelize.STRING,
        // get: function() {
        //   return JSON.parse(this.getDataValue('foto_sarana'));
        // },
      },
      perumahanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Perumahan 1:1
          model: 'Perumahans',
          key: 'id'
        }
      },
      kondisi_sarana: {
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
    return queryInterface.dropTable('Saranas');
  }
};
