'use strict'
const mongoose = require("mongoose")
require('dotenv').config()

//'mongodb://localhost:27017/api_nodejs_db'
mongoose.connect('mongodb+srv://api_nodejs:Api_nodejs@cluster0.zqcvn.mongodb.net/api_nodejs_db?retryWrites=true&w=majority')
    .then(()=>{
        console.log('Connection is Ok')
    })
    .catch((error)=>{
        console.log(error)
    })