const { request, response } = require('express');
const Natural = require('../models/naturales.model');

const armasController = {
    getAll: async (req = request, res = response) => {
        const naturales = await Natural.find({
            eliminado: false,
        });
        res.status(200).json(naturales);
    },
    getOne: async (req = request, res = response) => {
        const { id } = req.params;
        const natural = await Natural.findById(id);

        res.status(200).json(natural);
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
        const natural = new Natural(body);
        await natural.save();
        return res.status(201).json(natural);
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
        await Natural.findByIdAndUpdate(id, body);
        const natural = await Natural.findById(id);
        res.status(200).json(natural);
    },
    delete: async (req = request, res = response) => {
        const { id } = req.params;

        const natural = await Natural.findByIdAndUpdate(id, {
            eliminado: true,
        });
        res.status(200).json(natural);
    },
};

module.exports = armasController;
