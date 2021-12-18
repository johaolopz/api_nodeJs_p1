const { Router } = require("express");
const router = Router();

router.get('/', (req, res)=> {
    try {
        res.status('200').json({message:'/prueba route is Ok'})
    }
    catch{
        res.status('400').send('Error: Cannot GET /prueba')
    }
})

module.exports = router