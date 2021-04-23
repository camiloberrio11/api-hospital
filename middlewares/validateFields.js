const { validationResult } = require('express-validator');
const { responseHTTP } = require('../utils/responseHttp');

const validateFields = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return responseHTTP(400, errores.mapped(), 'Enviar campos obligatorios', false, res);
  }
  next();
};

module.exports = {
  validateFields,
};
