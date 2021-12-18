'use strict'

const express = require('express')
const bodyParser = require('body-parser')
require('./db');
const routes = require('./routes/index');

const app = express()

//Routes called here
app.use('/', routes);

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

//CORS


module.exports = app