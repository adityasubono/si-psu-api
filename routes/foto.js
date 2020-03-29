const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET perumahan listing.
router.get('/',async function(req, res, next) {
  try {
    const foto = await model.Foto.findAll({});
    if (foto.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': foto
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
// POST foto
router.post('/', async function(req, res, next) {
  try {
    const {
      nama_foto,
      path_foto,
      Perumahan,
    } = req.body;
    const foto = await model.Foto.create(
        {
      nama_foto,
      path_foto,
      Perumahan :[{
        Perumahan
      }]
        },
    {
      include: [models.Perumahan]
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
// UPDATE perumahan
router.patch('/:id', function(req, res, next) {
});
// DELETE perumahan
router.delete('/:id', function(req, res, next) {
});
module.exports = router;
