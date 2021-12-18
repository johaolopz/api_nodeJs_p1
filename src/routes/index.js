const { Router } = require('express');
// Importar todos los routers
// Ejemplo: const authRouter = require('./auth.js')
const prueba = require('./prueba')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)
router.use('/prueba', prueba);

module.exports = router