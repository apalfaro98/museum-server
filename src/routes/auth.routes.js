const router = require('express').Router();
const authController = require('../controllers/auth.controllers');
const authValidations = require('../validations/auth.validations');
const validateFields = require('../middlewares/validateFields.middleware');

router
	.post(
		'/',
		[...authValidations.authenticate, validateFields],
		authController.authenticate
	)
	.post(
		'/lookup',
		[...authValidations.checkIfLogued, validateFields],
		authController.checkIfLogued
	);

module.exports = router;
