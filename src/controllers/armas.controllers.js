const { request, response } = require('express');
const Arma = require('../models/armas.model');

const armasController = {
    getAll: async (req = request, res = response) => {
        const armas = await Arma.find();
        res.status(200).json(armas);
    },
    getOne: async (req = request, res = response) => {
        const { id } = req.params;
        const arma = await Arma.findById(id);

        res.status(200).json(arma);
    },
    create: async (req = request, res = response) => {
        const body = req.body;
        const image = req.file;
        if (!image) {
            return res.status(400).json({
                errors: [
                    {
                        msg: 'Debe proveer una imagen para el artículo.',
                        param: 'image',
                        location: 'body',
                    },
                ],
            });
        }
        body.imageUrl = image.filename;
        const arma = new Arma(body);
        await arma.save();
        return res.status(201).json(arma);
    },
    update: async (req = request, res = response) => {
        const { id } = req.params;
        const {
            propietario,
            codigo,
            noInventario,
            registroEntrada,
            prestado,
            recibido,
            prestamos,
            ...body
        } = req.body;
        await Arma.findByIdAndUpdate(id, body);
        const arma = await Arma.findById(id);
        res.status(200).json(arma);
    },
    delete: async (req = request, res = response) => {
        const { id } = req.params;

        const arma = await Arma.findByIdAndRemove(id);
        res.status(200).json(arma);
    },
};

module.exports = armasController;
