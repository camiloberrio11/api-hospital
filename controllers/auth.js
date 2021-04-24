const bcrypt = require('bcrypt');
const Usuario = require('../models/User');
const { generateJwt } = require('../utils/jwt');
const { responseHTTP } = require('../utils/responseHttp');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDB = await Usuario.findOne({ email });
    if (!userDB) {
      return responseHTTP(404, null, 'Email no encontrado', false, res);
    }

    const validPassword = bcrypt.compareSync(password, userDB.password);
    if (!validPassword) {
      return responseHTTP(400, null, 'Contraseña no valida', false, res);
    }

    // Generate token
    const token = await generateJwt(userDB.id);
    return responseHTTP(200, token, null, true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

module.exports = {
  login,
};
