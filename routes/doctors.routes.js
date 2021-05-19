'use strict';

const { Router } = require('express');
const {
  getDoctors,
  updateDoctors,
  createDoctors,
  deleteDoctors,
} = require('../controllers/doctors');
const { validateJwt } = require('../middlewares/validateJwt');
const { validateFields } = require('../middlewares/validateFields');
const { check } = require('express-validator');
const router = Router();
/*
  Ruta raiz: /api/doctor
 */

router.get('/', getDoctors);
router.put('/:id', [], updateDoctors);
router.post(
  '/',
  [validateJwt, check('name', 'Nombre del medico obligatorio').not().isEmpty(), validateFields],
  createDoctors
);
router.delete('/:id', validateJwt, deleteDoctors);

module.exports = router;
