const router = require('express').Router();
const prestamosController = require('../controllers/prestamos.controllers');
router
	.get('/', prestamosController.getAll)
	.get('/:id', prestamosController.getOne)
	.post('/', prestamosController.create)
	.put('/:id', prestamosController.update)
	.delete('/:id', prestamosController.delete);

module.exports = router;
