const Usuario = require('../models/User');
const { responseHTTP } = require('../utils/responseHttp');

const getUsers = async (req, res) => {
  try {
    const listUsers = await Usuario.find({}, { _id: false, __v: false, password: false });
    return responseHTTP(200, listUsers, null, true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existEmail = await Usuario.findOne({ email });
    if (existEmail) {
      return responseHTTP(400, null, 'Este email ya ha sido registrado', false, res);
    }
    const usuario = new Usuario(req.body);
    await usuario.save();
    return responseHTTP(200, usuario, null, true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

module.exports = {
  getUsers,
  createUser,
};
