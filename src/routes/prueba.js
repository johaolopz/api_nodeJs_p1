const { Router } = require("express");
const router = Router();
const { prueba } = require('../controllers/prueba')

const pruebaController = prueba
router.get('/', pruebaController)

module.exports = router