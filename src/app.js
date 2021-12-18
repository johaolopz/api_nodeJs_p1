'use strict'

const express = require('express')
const bodyParser = require('body-parser')
require('./db');
const routes = require('./routes/index')

const app = express()

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

//CORS

//Routes called here, this order matter, first the middleware and next to call routes
app.use('/', routes)


module.exports = app