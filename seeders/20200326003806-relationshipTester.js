'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // return queryInterface.bulkInsert('perumahans', [{
    //   nama_perumahan: 'Bumi Citra Asri',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },{
    //   nama_perumahan: 'Tonjong Segar',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }
    // ], {});
    return queryInterface.bulkInsert('saranas', [{
      nama_sarana: 'GOR Sehat BCA',
      luas_sarana: '300',
      foto_sarana: '\'assets/images/PERUMAHAN/perumahan%203.jpg\', \'assets/images/PERUMAHAN/perumahan%203.jpg\', \'assets/images/PERUMAHAN/perumahan%203.jpg\'',
      perumahanId: 1,
      kondisi_sarana: 'rusak berat',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      nama_sarana: 'GOR Sehat Dong BCA',
      luas_sarana: '300',
      foto_sarana: '\'assets/images/PERUMAHAN/perumahan%203.jpg\', \'assets/images/PERUMAHAN/perumahan%203.jpg\', \'assets/images/PERUMAHAN/perumahan%203.jpg\'',
      kondisi_sarana: 'rusak ringan',
      perumahanId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
      nama_sarana: 'GOR Sehat Tonjong Segar',
      luas_sarana: '300',
      foto_sarana: '\'assets/images/PERUMAHAN/perumahan%203.jpg\', \'assets/images/PERUMAHAN/perumahan%203.jpg\', \'assets/images/PERUMAHAN/perumahan%203.jpg\'',
      kondisi_sarana: 'rusak ringan',
      perumahanId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        nama_sarana: 'GOR Sehat Dong Tonjong Segar',
        luas_sarana: '300',
        foto_sarana: 'assets/images/PERUMAHAN/perumahan%203.jpg, assets/images/PERUMAHAN/perumahan%203.jpg, assets/images/PERUMAHAN/perumahan%203.jpg',
        kondisi_sarana: 'baik',
        perumahanId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});

    */
    return queryInterface.bulkDelete('saranas', null, {});

  }
};
