const User = require('../models/users.model');
require('dotenv').config();

const createAdminUser = async () => {
	// await User.create({
	// 	name: process.env.ADMIN_NAME || 'admin',
	// 	password: process.env.ADMIN_PASSWORD || '1234',
	// });
	const user = await User.findOne({ name: 'angelica' });
	console.log(user);
};

createAdminUser();
