const express = require('express');
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('../config/database.config');

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT || 3000;
		this.armasRoute = '/api/armas';
		this.naturalesRoute = '/api/naturales';
		this.prestamosRoute = '/api/prestamos';

		//DATABASE
		this.connectDB();

		//Middlewares
		this.middlewares();

		//Routes
		this.routes();
	}

	async connectDB() {
		await dbConnection();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Read and parse JSON
		this.app.use(express.json());

		// //Public directory
		this.app.use(express.static(path.resolve(__dirname, '../public')));
	}

	routes() {
		this.app.use(this.armasRoute, require('../routes/armas.routes'));
		this.app.use(this.naturalesRoute, require('../routes/naturales.routes'));
		this.app.use(this.prestamosRoute, require('../routes/prestamos.routes'));
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running in port: ${this.PORT}`);
		});
	}
}

module.exports = Server;
