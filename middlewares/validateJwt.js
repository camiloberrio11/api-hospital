const jwt = require('jsonwebtoken');
const { responseHTTP } = require('../utils/responseHttp');

const validateJwt = (req, res, next) => {
  const token = req.header('Token');

  if (!token) {
    return responseHTTP(401, null, 'Token no presente', false, res);
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETKEY);
    if (uid) {
      req.uid = uid;
      next();
    }
  } catch (error) {
    return responseHTTP(401, null, 'Token no valido', false, res);
  }
};

module.exports = {
  validateJwt,
};
