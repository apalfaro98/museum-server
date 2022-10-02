const { request, response } = require('express');
const User = require('../models/users.model');
const { generateJWT, checkJWT } = require('../services/auth.services');

const authController = {
	authenticate: async (req = request, res = response) => {
		const { name, password } = req.body;

		const user = await User.findOne({ name });
		if (user.password !== password) {
			return res.status(400).json({
				errors: [
					{
						value: password,
						msg: 'La contraseña es incorrecta',
						param: 'password',
						location: 'body',
					},
				],
			});
		}

		const token = generateJWT(name);
		return res.status(200).json({
			name,
			token,
		});
	},
	checkIfLogued: (req = request, res = response) => {
		const { token } = req.body;

		try {
			const { username } = checkJWT(token);

			res.status(200).json({
				logued: true,
				name: username,
			});
		} catch (error) {
			res.status(401).json({
				logued: false,
				msg: 'Token no válido.',
			});
		}
	},
};

module.exports = authController;
