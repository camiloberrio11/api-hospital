const { Router } = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/usuarios');
const { validateFields } = require('../middlewares/validateFields');
const { check } = require('express-validator');
const { validateJwt } = require('../middlewares/validateJwt');
const router = Router();

/*
  Ruta raiz: /api/users
 */

router.get('/', validateJwt, getUsers);
router.put(
  '/:iduser',
  [
    validateJwt,
    check('name', 'Nombre obligatorio').not().isEmpty(),
    check('role', 'Rol obligatorio').not().isEmpty(),
    check('email', 'email es obligatorio').isEmail(),
    validateFields,
  ],
  updateUser
);
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
router.delete('/:iduser', validateJwt, deleteUser);

module.exports = router;
