'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const Persona = schema({
    dni: String,
    name: String,
    lastName: String,
    age: Number
})

module.exports = mongoose.model('Persona', Persona)