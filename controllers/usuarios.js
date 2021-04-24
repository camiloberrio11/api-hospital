const bcrypt = require('bcrypt');
const Usuario = require('../models/User');
const { generateJwt } = require('../utils/jwt');
const { responseHTTP } = require('../utils/responseHttp');

const getUsers = async (req, res) => {
  try {
    const listUsers = await Usuario.find({});
    return responseHTTP(200, listUsers, null, true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existEmail = await Usuario.findOne({ email });
    if (existEmail) {
      return responseHTTP(400, null, 'Este email ya ha sido registrado', false, res);
    }
    const usuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    const token = await generateJwt(usuario.id);

    return responseHTTP(200, { usuario, token }, null, true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.iduser;
  try {
    const userDB = await Usuario.findById(id);
    if (!userDB) {
      return responseHTTP(404, null, 'Usuario no encontrado', false, res);
    }

    const { password, google, email, ...campos } = req.body;

    if (userDB.email !== email) {
      const existEmail = await Usuario.findOne({ email });
      if (existEmail) {
        return responseHTTP(400, null, 'Este email ya ha sido registrado', false, res);
      }
    }

    campos.email = email;

    const userUpdated = await Usuario.findByIdAndUpdate(id, campos, { new: true });
    return responseHTTP(200, userUpdated, null, true, res);

    // Update
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.iduser;
  try {
    const userDB = await Usuario.findById(id);
    if (!userDB) {
      return responseHTTP(404, null, 'Usuario no encontrado', false, res);
    }
    await Usuario.findByIdAndDelete(id);
    return responseHTTP(200, null, 'Usuario eliminado', true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
