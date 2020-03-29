const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET perumahan listing.
router.get('/', async function (req, res, next) {
  try {
    const perumahan = await model.Perumahan.findAll({
      include: [
        {
          model: model.Foto,
          as: 'fotos'
        },
        {
          model: model.Sarana,
          as: 'saranas',
          include: [{
            model: model.Koordinat,
            as: 'koordinatsaranas'
          }]
        },
        {
          model: model.JalanSaluran,
          as: 'jalansalurans',
          include: [{
            model: model.Koordinat,
            as: 'koordinatjalansalurans'
          }]
        },
        {
          model: model.Koordinat,
          as: 'koordinats'
        },
        {
          model: model.Taman,
          as: 'tamans',
          include: [{
            model: model.Koordinat,
            as: 'koordinattamans'
          }]
        },
        {
          model: model.Cctv,
          as: 'cctvs'
        },
      ]
    });
    if (perumahan.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': perumahan
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
});
// POST perumahan
router.post('/', async function (req, res) {
  try {
    const {
      nama_perumahan,
      nama_pengembang,
      luas_perumahan,
      jumlah_rumah,
      kecamatan,
      kelurahan,
      RT,
      RW,
      status,
      no_bast,
      sph,
      jumlah_psu,
      keterangan,
      fotos,
      saranas,
      jalansalurans,
      koordinats,
      tamans,
      cctvs,
    } = req.body;
    const perumahan = await model.Perumahan.create({
      nama_perumahan,
      nama_pengembang,
      luas_perumahan,
      jumlah_rumah,
      kecamatan,
      kelurahan,
      RT,
      RW,
      status,
      no_bast,
      sph,
      jumlah_psu,
      keterangan,
      fotos,
      saranas,
      jalansalurans,
      koordinats,
      tamans,
      cctvs
    }, {
      include: [
        {
          model: model.Foto,
          as: 'fotos'
        },
        {
          model: model.Sarana,
          as: 'saranas',
          include: [{
            model: model.Koordinat,
            as: 'koordinatsaranas'
          }]
        },
        {
          model: model.JalanSaluran,
          as: 'jalansalurans',
          include: [{
            model: model.Koordinat,
            as: 'koordinatjalansalurans'
          }]
        },
        {
          model: model.Koordinat,
          as: 'koordinats'
        },
        {
          model: model.Taman,
          as: 'tamans',
          include: [{
            model: model.Koordinat,
            as: 'koordinattamans'
          }]
        },
        {
          model: model.Cctv,
          as: 'cctvs'
        },
      ]
    });
    if (perumahan) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'Perumahan berhasil ditambahkan',
        'data': perumahan,
      })
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
});

//FINDONE perumahan
router.get('/:perumahanId', async (req, res) => {
  try {
    const {perumahanId} = req.params;
    const perumahan = await model.Perumahan.findOne({
      where: {id: perumahanId},
      include: [
        {
          model: model.Foto,
          as: 'fotos'
        },
        {
          model: model.Sarana,
          as: 'saranas',
          include: [{
            model: model.Koordinat,
            as: 'koordinatsaranas'
          }]
        },
        {
          model: model.JalanSaluran,
          as: 'jalansalurans',
          include: [{
            model: model.Koordinat,
            as: 'koordinatjalansalurans'
          }]
        },
        {
          model: model.Koordinat,
          as: 'koordinats'
        },
        {
          model: model.Taman,
          as: 'tamans',
          include: [{
            model: model.Koordinat,
            as: 'koordinattamans'
          }]
        },
        {
          model: model.Cctv,
          as: 'cctvs'
        },
      ]
    });
    if (perumahan) {
      return res.status(200).json({perumahan});
    }
    return res.status(404).send('Perumahan with the specified ID does not'
        + ' exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// UPDATE perumahan
router.post('/:perumahanId', async function (req, res) {
  try {
    const {perumahanId} = req.params;
    const [perumahanUpdated] = await model.Perumahan.update(req.body, {
      where: {id: perumahanId},
      include: [
        {
          model: model.Foto,
          as: 'fotos'
        },
        {
          model: model.Sarana,
          as: 'saranas',
          include: [{
            model: model.Koordinat,
            as: 'koordinatsaranas'
          }]
        },
        {
          model: model.JalanSaluran,
          as: 'jalansalurans',
          include: [{
            model: model.Koordinat,
            as: 'koordinatjalansalurans'
          }]
        },
        {
          model: model.Koordinat,
          as: 'koordinats'
        },
        {
          model: model.Taman,
          as: 'tamans',
          include: [{
            model: model.Koordinat,
            as: 'koordinattamans'
          }]
        },
        {
          model: model.Cctv,
          as: 'cctvs'
        },
      ]
    });
    if (perumahanUpdated) {
      const updatedPerumahan = await model.Perumahan.findOne(
          {
            where: {id: perumahanId},
            include: [
              {
                model: model.Foto,
                as: 'fotos'
              },
              {
                model: model.Sarana,
                as: 'saranas',
                include: [{
                  model: model.Koordinat,
                  as: 'koordinatsaranas'
                }]
              },
              {
                model: model.JalanSaluran,
                as: 'jalansalurans',
                include: [{
                  model: model.Koordinat,
                  as: 'koordinatjalansalurans'
                }]
              },
              {
                model: model.Koordinat,
                as: 'koordinats'
              },
              {
                model: model.Taman,
                as: 'tamans',
                include: [{
                  model: model.Koordinat,
                  as: 'koordinattamans'
                }]
              },
              {
                model: model.Cctv,
                as: 'cctvs'
              },
            ]
          });
      return res.status(200).json({perumahanUpdate: updatedPerumahan});
    }
  } catch (error) {
    res.status(500).json({
      'status': 'ERROR memperbarui data perumahan',
      'messages': error.message
    })
  }
});

// DELETE perumahan
router.delete('/:perumahanId', async (req, res) => {
      try {
        const {perumahanId} = req.params;
        const deletedPerumahan = await model.Perumahan.destroy({
          where: {id: perumahanId},
        });
        if (deletedPerumahan) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'Perumahan berhasil dihapus',
            'data': {},
          })
        }
      } catch (error) {
        res.status(500).json({
          'status': 'ERROR menghapus perumahan',
          'messages': error.message
        })
      }
    }
);
module.exports = router;
