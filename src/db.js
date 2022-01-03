'use strict'
const mongoose = require("mongoose")

//'mongodb://localhost:27017/api_nodejs_db'
mongoose.connect('mongodb+srv://api_nodejs:Api_nodejs@cluster0.zqcvn.mongodb.net/test')
    .then(()=>{
        console.log('Connection is Ok')
    })
    .catch((error)=>{
        console.log(error)
    })