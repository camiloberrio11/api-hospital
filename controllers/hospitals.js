'use strict';

const Hospital = require('../models/Hospital');
const { responseHTTP } = require('../utils/responseHttp');

const getHospitals = (req, res) => {
  try {
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const updateHospital = (req, res) => {
  try {
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const createHospital = async (req, res) => {
  try {
    const uidUser = req.uid;
    const hospital = new Hospital({ ...req.body, user: uidUser });
    const hospitalSaved = await hospital.save();
    return responseHTTP(200, hospitalSaved, 'Hospital guardado', true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const deleteHospital = (req, res) => {
  try {
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

module.exports = {
  getHospitals,
  updateHospital,
  createHospital,
  deleteHospital,
};
