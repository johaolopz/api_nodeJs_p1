const { Router } = require("express");
const router = Router();
const controllers = require('../controllers/persona')

router.post('/', controllers.addPerson)
router.get('/', controllers.getPersons)

module.exports = router