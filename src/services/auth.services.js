const jwt = require('jsonwebtoken');

const generateJWT = (username = '') => {
	const payload = { username };

	return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
		expiresIn: '2h',
	});
};

const checkJWT = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = {
	generateJWT,
	checkJWT,
};
