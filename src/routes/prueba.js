const { Router } = require("express");
const router = Router();
const pruebaController = require('../controllers/prueba')

router.get('/', pruebaController)

module.exports = router