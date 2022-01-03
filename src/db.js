'use strict'
const mongoose = require("mongoose")
require('dotenv').config()

//'mongodb://localhost:27017/api_nodejs_db'
mongoose.connect(`mongodb+srv://api_nodejs:${process.env.PASSWORD}@cluster0.zqcvn.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`)
    .then(()=>{
        console.log('Connection is Ok')
    })
    .catch((error)=>{
        console.log(error)
    })