const express = require('express');
const cors = require('cors');
const path = require('path');

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT || 3000;
		// this.authRoute = '/api/auth';

		//DATABASE
		this.connectDB();

		//Middlewares
		this.middlewares();

		//Routes
		this.routes();
	}

	async connectDB() {}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Read and parse JSON
		this.app.use(express.json());

		// //Public directory
		this.app.use(express.static(path.resolve(__dirname, '../public')));
	}

	routes() {
		// this.app.use(this.authRoute, require('../routes/auth.routes'));
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running in port: ${this.PORT}`);
		});
	}
}

module.exports = Server;
