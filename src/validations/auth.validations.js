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
};

module.exports = authValidations;
