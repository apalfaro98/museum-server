const { check } = require('express-validator');
const User = require('../models/users.model');

const authValidations = {
	authenticate: [
		check('name', 'El nombre de usuario es requerido').not().isEmpty(),
		check('name').custom(async (name) => {
			const user = await User.findOne({ name });
			if (!user) {
				throw Error('El usuario solicitado no existe');
			}
		}),
		check('password', 'La contraseña es requerida.').not().isEmpty(),
	],
	checkIfLogued: [
		check('token', 'El token es requerido.').not().isEmpty(),
		check('token', 'El token no tiene un formato válido.').isJWT(),
	],
};

module.exports = authValidations;
