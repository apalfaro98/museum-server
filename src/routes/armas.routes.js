const router = require('express').Router();
const armasController = require('../controllers/armas.controllers');

router
	.get('/', armasController.getAll)
	.get('/:id', armasController.getOne)
	.post('/', armasController.create)
	.put('/:id', armasController.update)
	.delete('/:id', armasController.delete);

module.exports = router;
