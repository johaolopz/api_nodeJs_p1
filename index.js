'use strict'
const app = require('./src/app')

// //connection is called
// const conn = require('./src/db')

//PORT defined
const port = 3001

//Server is uploaded
app.listen(port, () => {
    console.log('Server listening at 3001')
  });

