const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET perumahan listing.
router.get('/', async function (req, res, next) {
  try {
    const permukiman = await model.Permukiman.findAll({
      include: [
        {
          model: model.Pengelola, as: 'pengelolas'
        },
        {
          model: model.Foto, as: 'fotos'
        },
        {
          model: model.InventarisAlat, as: 'inventarisalats'
        },
        {
          model: model.Status, as: 'status'
        },
        {
          model: model.Koordinat, as: 'koordinats'
        },
        {
          model: model.Cctv, as: 'cctvs'
        },
      ]
    });
    if (permukiman.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': permukiman
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
      nama_tpu,
      luas_tpu,
      tahun_digunakan,
      data_tampung_tpu,
      kecamatan,
      kelurahan,
      RT,
      RW,
      keterangan,
      pengelolas,
      fotos,
      inventarisalats,
      status,
      koordinats,
    } = req.body;
    const permukiman = await model.Permukiman.create({
      nama_tpu,
      luas_tpu,
      tahun_digunakan,
      data_tampung_tpu,
      kecamatan,
      kelurahan,
      RT,
      RW,
      keterangan,
      pengelolas,
      fotos,
      inventarisalats,
      status,
      koordinats,
    }, {
      include: [
        {
          model: model.Pengelola, as: 'pengelolas'
        },
        {
          model: model.Foto, as: 'fotos'
        },
        {
          model: model.InventarisAlat, as: 'inventarisalats'
        },
        {
          model: model.Status, as: 'status'
        },
        {
          model: model.Koordinat, as: 'koordinats'
        },
        {
          model: model.Cctv, as: 'cctvs'
        },
      ]
    });
    if (permukiman) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'Permukiman berhasil ditambahkan',
        'data': permukiman,
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

//FINDONE permukiman
router.get('/:permukimanId', async (req, res) => {
  try {
    const {permukimanId} = req.params;
    const permukiman = await model.Permukiman.findOne({
      where: {id: permukimanId},
      include: [
        {
          model: model.Pengelola, as: 'pengelolas'
        },
        {
          model: model.Foto, as: 'fotos'
        },
        {
          model: model.InventarisAlat, as: 'inventarisalats'
        },
        {
          model: model.Status, as: 'status'
        },
        {
          model: model.Koordinat, as: 'koordinats'
        },
        {
          model: model.Cctv, as: 'cctvs'
        },
      ]
    });
    if (permukiman) {
      return res.status(200).json({permukiman});
    }
    return res.status(404).send('Permukiman with the specified ID does not'
        + ' exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// UPDATE perumahan
router.post('/:permukimanId', async function (req, res) {
  try {
    const {permukimanId} = req.params;
    const [permukimanUpdated] = await model.Permukiman.update(req.body, {
      where: {id: permukimanId},
      include: [
        {
          model: model.Pengelola, as: 'pengelolas'
        },
        {
          model: model.Foto, as: 'fotos'
        },
        {
          model: model.InventarisAlat, as: 'inventarisalats'
        },
        {
          model: model.Status, as: 'status'
        },
        {
          model: model.Koordinat, as: 'koordinats'
        },
        {
          model: model.Cctv, as: 'cctvs'
        },
      ]
    });
    if (permukimanUpdated) {
      const updatedPermukiman = await model.Permukiman.findOne(
          {
            where: {id: permukimanId},
            include: [
              {
                model: model.Pengelola, as: 'pengelolas'
              },
              {
                model: model.Foto, as: 'fotos'
              },
              {
                model: model.InventarisAlat, as: 'inventarisalats'
              },
              {
                model: model.Status, as: 'status'
              },
              {
                model: model.Koordinat, as: 'koordinats'
              },
              {
                model: model.Cctv, as: 'cctvs'
              },
            ]
          });
      return res.status(200).json({permukimanUpdate: updatedPermukiman});
    }
  } catch (error) {
    res.status(500).json({
      'status': 'ERROR memperbarui data permukiman',
      'messages': error.message
    })
  }
});

// DELETE permukiman
router.delete('/:permukimanId', async (req, res) => {
      try {
        const {permukimanId} = req.params;
        const deletedPermukiman = await model.Permukiman.destroy({
          where: {id: permukimanId},
        });
        if (deletedPermukiman) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'Permukiman berhasil dihapus',
            'data': {},
          })
        }
      } catch (error) {
        res.status(500).json({
          'status': 'ERROR menghapus permukiman',
          'messages': error.message
        })
      }
    }
);
module.exports = router;
