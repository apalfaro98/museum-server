const router = require('express').Router();
const naturalesController = require('../controllers/naturales.controllers');
const naturalesValidations = require('../validations/naturales.validations');
const validateFields = require('../middlewares/validateFields.middleware');

router
	.get('/', naturalesController.getAll)
	.get(
		'/:id',
		[...naturalesValidations.getOne, validateFields],
		naturalesController.getOne
	)
	.post(
		'/',
		[...naturalesValidations.create, validateFields],
		naturalesController.create
	)
	.put(
		'/:id',
		[...naturalesValidations.update, validateFields],
		naturalesController.update
	)
	.delete(
		'/:id',
		[...naturalesValidations.delete, validateFields],
		naturalesController.delete
	);

module.exports = router;
