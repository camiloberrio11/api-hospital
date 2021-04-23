const { Router } = require('express');
const { getUsers, createUser } = require('../controllers/usuarios');
const { validateFields } = require('../middlewares/validateFields');
const { check } = require('express-validator');
const router = Router();

/*
  Ruta raiz: /api/users
 */

router.get('/', getUsers);
router.post(
  '/',
  [
    check('name', 'Nombre obligatorio').not().isEmpty(),
    check('password', 'Paswword obligatorio').not().isEmpty(),
    check('email', 'email es obligatorio').isEmail(),
    validateFields,
  ],
  createUser
);

module.exports = router;
