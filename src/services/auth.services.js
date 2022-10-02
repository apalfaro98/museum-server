const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

const generateJWT = (username = '') => {
	const payload = { username };

	return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
		expiresIn: '2h',
	});
};

const checkJWT = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

const authenticate = (name, password) => {
	const user = await User.findOne({ name })
};

module.exports = {
	generateJWT,
	checkJWT,
};
