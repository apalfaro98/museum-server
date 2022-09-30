const router = require('express').Router();
const naturalesController = require('../controllers/naturales.controllers');
router
	.get('/', naturalesController.getAll)
	.get('/:id', naturalesController.getOne)
	.post('/', naturalesController.create)
	.put('/:id', naturalesController.update)
	.delete('/:id', naturalesController.delete);

module.exports = router;
