'use strict'

const express = require('express')
const bodyParser = require('body-parser')
require('./db');

const app = express()

//RUTAS

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

//CORS


module.exports = app