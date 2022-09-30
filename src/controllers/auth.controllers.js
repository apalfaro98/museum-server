const { request, response } = require('express');

const authController = {
	authenticate: (req = request, res = response) => {
		res.status(200).json({
			msg: 'Authenticated',
		});
	},
};

module.exports = authController;
