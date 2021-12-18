const { Router } = require('express');
// Importar todos los routers
// Ejemplo: const authRouter = require('./auth.js')
const prueba = require('./prueba')
const persona = require('./persona')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)
router.use('/prueba', prueba);
router.use('/persona', persona);

module.exports = router