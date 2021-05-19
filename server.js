'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const routesUser = require('./routes/usuarios.routes');
const routesAuth = require('./routes/auth.routes');
const routesHospitals = require('./routes/hospitals.routes');
const routesDoctor = require('./routes/doctors.routes');

// Create server
const app = express();

// Database connection
dbConnection();

// Middleares config
app.use(cors());
app.use(express.json());
app.use('/api/users', routesUser);
app.use('/api/auth', routesAuth);
app.use('/api/hospitals', routesHospitals);
app.use('/api/doctor', routesDoctor);

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
);
