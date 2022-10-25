const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const { dbConnection } = require('../config/database.config');
const User = require('../models/users.model');

class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 3000;
        this.armasRoute = '/api/armas';
        this.naturalesRoute = '/api/naturales';
        this.prestamosRoute = '/api/prestamos';
        this.transferenciasRoute = '/api/transferencias';
        this.donacionesRoute = '/api/donaciones';
        this.bajasRoute = '/api/bajas';
        this.estadisticaRoute = '/api/estadistica';
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

        // Create the admin user if not exists
        this.createFirstUser();
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
            multer({
                storage: this.fileStorage,
                fileFilter: this.fileFilter,
            }).single('image')
        );

        //Static Images
        this.app.use(
            '/images',
            express.static(path.join(__dirname, '../images'))
        );

        //Public directory
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    routes() {
        this.app.use(this.armasRoute, require('../routes/armas.routes'));
        this.app.use(
            this.naturalesRoute,
            require('../routes/naturales.routes')
        );
        this.app.use(
            this.prestamosRoute,
            require('../routes/prestamos.routes')
        );
        this.app.use(
            this.transferenciasRoute,
            require('../routes/transferencias.routes')
        );
        this.app.use(
            this.donacionesRoute,
            require('../routes/donaciones.routes')
        );
        this.app.use(this.bajasRoute, require('../routes/bajas.routes'));
        this.app.use(
            this.estadisticaRoute,
            require('../routes/estadistica.routes')
        );
        this.app.use(this.authRoute, require('../routes/auth.routes'));
    }

    async createFirstUser() {
        const admin = await User.findOne({ name: process.env.ADMIN_NAME });
        if (!admin) {
            const admin = new User({
                name: process.env.ADMIN_NAME,
                password: process.env.ADMIN_PASSWORD,
            });
            await admin.save();
        }
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server running in port: ${this.PORT}`);
        });
    }
}

module.exports = Server;
