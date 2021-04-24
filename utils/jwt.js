const jwt = require('jsonwebtoken');

const generateJwt = (iduser) => {
  return new Promise((resolve, reject) => {
    const payload = { uid: iduser };
    jwt.sign(payload, process.env.SECRETKEY, { expiresIn: '12h' }, (err, token) => {
      if (err) {
        console.log(err);
        reject('No se pudo generar el token');
      }
      resolve(token);
    });
  });
};

module.exports = {
  generateJwt,
};
