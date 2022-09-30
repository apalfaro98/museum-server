const router = require('express').Router();
const armasController = require('../controllers/armas.controllers');
const armasValidations = require('../validations/armas.validations');
const validateFields = require('../middlewares/validateFields.middleware');

router
	.get('/', armasController.getAll)
	.get(
		'/:id',
		[...armasValidations.getOne, validateFields],
		armasController.getOne
	)
	.post(
		'/',
		[...armasValidations.create, validateFields],
		armasController.create
	)
	.put(
		'/:id',
		[...armasValidations.update, validateFields],
		armasController.update
	)
	.delete(
		'/:id',
		[...armasValidations.delete, validateFields],
		armasController.delete
	);

module.exports = router;
