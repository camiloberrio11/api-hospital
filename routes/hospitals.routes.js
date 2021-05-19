'use strict'

const { Router } = require('express');
const {
  getHospitals,
  updateHospital,
  createHospital,
  deleteHospital,
} = require('../controllers/hospitals');
const { validateJwt } = require('../middlewares/validateJwt');
const { validateFields } = require('../middlewares/validateFields');
const { check } = require('express-validator');
const router = Router();
/*
  Ruta raiz: /api/hospitals
 */

router.get('/', getHospitals);
router.put('/:id', [], updateHospital);
router.post('/', [], createHospital);
router.delete('/:id', validateJwt, deleteHospital);

module.exports = router;
