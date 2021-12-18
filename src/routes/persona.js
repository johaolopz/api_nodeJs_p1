const { Router } = require("express");
const router = Router();
const controllers = require('../controllers/persona')

router.post('/', controllers.addPerson)
router.get('/', controllers.getPersons)
router.get('/:id', controllers.getOnePerson)
router.put('/edit', controllers.updatePerson)
router.delete('/:id', controllers.deletePerson)

module.exports = router