const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validateFields');

const router = Router();

/*
  Ruta raiz: /api/auth
 */

router.post('/', [
  check('password', 'Paswword obligatorio').not().isEmpty(),
  check('email', 'email es obligatorio').isEmail(),
  validateFields
], login);

module.exports = router;
