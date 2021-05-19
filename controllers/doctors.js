'use strict';
const Doctor = require('../models/Doctor');

const { responseHTTP } = require('../utils/responseHttp');

const getDoctors = (req, res) => {
  try {
  } catch (error) {}
};

const updateDoctors = (req, res) => {
  try {
  } catch (error) {}
};

const createDoctors = async (req, res) => {
  try {
    const uidUser = req.uid;
    const doctor = new Doctor({ ...req.body, user: uidUser });
    const doctorSaved = await doctor.save();
    return responseHTTP(200, doctorSaved, 'Medico guardado', true, res);
  } catch (error) {
    return responseHTTP(500, null, error.message, false, res);
  }
};

const deleteDoctors = (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getDoctors,
  updateDoctors,
  createDoctors,
  deleteDoctors,
};
