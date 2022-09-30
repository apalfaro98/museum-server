const router = require('express').Router();
const prestamosController = require('../controllers/prestamos.controllers');
const prestamosValidations = require('../validations/prestamos.validations');
const validateFields = require('../middlewares/validateFields.middleware');

router
	.get('/', prestamosController.getAll)
	.get(
		'/:id',
		[...prestamosValidations.getOne, validateFields],
		prestamosController.getOne
	)
	.post(
		'/',
		[...prestamosValidations.create, validateFields],
		prestamosController.create
	)
	.put(
		'/:id',
		[...prestamosValidations.update, validateFields],
		prestamosController.update
	)
	.delete(
		'/:id',
		[...prestamosValidations.delete, validateFields],
		prestamosController.delete
	);

module.exports = router;
