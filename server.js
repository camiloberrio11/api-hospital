require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Create server
const app = express();

// Middleares config
app.use(cors());

// Database connection
dbConnection();

app.listen(process.env.PORT, () => console.log('Servidor corriendo en el puerto 3000'));
