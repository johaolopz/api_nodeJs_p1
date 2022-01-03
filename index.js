'use strict'
const app = require('./src/app')
require('dotenv').config()

// //connection is called
// const conn = require('./src/db')

// //PORT defined
// const port = 3001

//Server is uploaded
app.listen(process.env.PORT, () => {
    console.log('Server listening at 3001')
  });

