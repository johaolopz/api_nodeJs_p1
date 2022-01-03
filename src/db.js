'use strict'
const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://api_nodejs:Api_nodejs@cluster0.zqcvn.mongodb.net/cluster0?retryWrites=true&w=majority' || 'mongodb://localhost:27017/api_nodejs_db')
    .then(()=>{
        console.log('Connection is Ok')
    })
    .catch((error)=>{
        console.log(error)
    })