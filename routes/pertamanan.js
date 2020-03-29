const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET perumahan listing.
router.get('/', async function (req, res, next) {
  try {
    const pertamanan = await model.Pertamanan.findAll({
      include: [
        {
          model: model.Foto, as: 'fotopertamanans'
        },
        {
          model: model.Cctv, as: 'cctvpertamanans'
        },
        {
          model: model.Petugas, as: 'petugas'
        }, {
          model: model.PeralatanPemelihara, as: 'peralatanpemeliharans'
        },
        {
          model: model.Hardscape, as: 'hardscapes'
        },
        {
          model: model.Softscape, as: 'softscapes'
        },
      ]
    });
    if (pertamanan.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': pertamanan
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
router.post('/', async function (req, res, next) {
  try {
    const {
      nama_taman,
      nama_pelaksana,
      luas_taman,
      kecamatan,
      kelurahan,
      RT,
      RW,
      tahun_dibangun,
      keterangan,
      fotopertamanans,
      cctvpertamanans,
      petugas,
      peralatanpemeliharans,
      hardscapes,
      softscapes
    } = req.body;
    const pertamanan = await model.Pertamanan.create({
      nama_taman,
      nama_pelaksana,
      luas_taman,
      kecamatan,
      kelurahan,
      RT,
      RW,
      tahun_dibangun,
      keterangan,
      fotopertamanans,
      cctvpertamanans,
      petugas,
      peralatanpemeliharans,
      hardscapes,
      softscapes
    }, {
      include: [
        {
          model: model.Foto,
          as: 'fotopertamanans'
        },
        {
          model: model.Cctv,
          as: 'cctvpertamanans'
        },
        {
          model: model.Petugas,
          as: 'petugas'
        },
        {
          model: model.PeralatanPemelihara,
          as: 'peralatanpemeliharans'
        },
        {
          model: model.Hardscape,
          as: 'hardscapes'
        },
        {
          model: model.Softscape,
          as: 'softscapes'
        }
      ]
    });
    if (pertamanan) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'Pertamanan berhasil ditambahkan',
        'data': pertamanan,
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

// UPDATE perumahan
router.patch('/:id', function (req, res, next) {
});
// DELETE perumahan
router.delete('/:id', function (req, res, next) {
});
module.exports = router;
