'use strict'

function prueba (req, res) {
    try {
        res.status(200).json({message:'/prueba route is Ok'})
    }
    catch{
        res.status(400).send('Error: Cannot GET /prueba')
    }
}

module.exports = prueba