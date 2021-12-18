'use strict'
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/api_nodejs_db')
    .then(()=>{
        console.log('Connection is Ok')
    })
    .catch((error)=>{
        console.log(error)
    })