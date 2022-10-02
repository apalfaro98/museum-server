const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const { dbConnection } = require('../config/database.config');

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT || 3000;
		this.armasRoute = '/api/armas';
		this.naturalesRoute = '/api/naturales';
		this.prestamosRoute = '/api/prestamos';
		this.authRoute = '/api/auth';

		//Store files
		this.fileStorage = multer.diskStorage({
			destination: (req, file, cb) => {
				cb(null, './src/images');
			},
			filename: (req, file, cb) => {
				cb(null, Date.now() + '-' + file.originalname);
			},
		});

		//DATABASE
		this.connectDB();

		//Middlewares
		this.middlewares();

		//Routes
		this.routes();
	}

	//Filter images
	fileFilter(req, file, cb) {
		if (
			file.mimetype === 'image/png' ||
			file.mimetype === 'image/jpg' ||
			file.mimetype === 'image/jpeg'
		) {
			cb(null, true);
		} else {
			cb(null, false);
		}
	}

	async connectDB() {
		await dbConnection();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Read and parse JSON
		this.app.use(express.json());

		//Handlig multipart data like images
		this.app.use(
			multer({ storage: this.fileStorage, fileFilter: this.fileFilter }).single(
				'image'
			)
		);

		//Static Images
		this.app.use('/images', express.static(path.join(__dirname, '../images')));

		//Public directory
		this.app.use(express.static(path.resolve(__dirname, '../public')));
	}

	routes() {
		this.app.use(this.armasRoute, require('../routes/armas.routes'));
		this.app.use(this.naturalesRoute, require('../routes/naturales.routes'));
		this.app.use(this.prestamosRoute, require('../routes/prestamos.routes'));
		this.app.use(this.authRoute, require('../routes/auth.routes'));
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running in port: ${this.PORT}`);
		});
	}
}

module.exports = Server;
