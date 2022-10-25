const { request, response } = require('express');
const Donacion = require('../models/donaciones.model');
const Arma = require('../models/armas.model');
const Natural = require('../models/naturales.model');

const donacionesController = {
    getAll: async (req = request, res = response) => {
        const donaciones = await Donacion.find();
        res.status(200).json(donaciones);
    },
    getOne: async (req = request, res = response) => {
        const { id } = req.params;
        const donacion = await Donacion.findById(id);

        if (donacion.section === 'armas') {
            const arma = await Arma.findById(donacion.elementId);
            return res.status(200).json({
                donacion,
                articulo: arma,
            });
        } else if (donacion.section === 'naturales') {
            const natural = await Natural.findById(donacion.elementId);
            return res.status(200).json({
                donacion,
                articulo: natural,
            });
        }

        res.status(200).json(donacion);
    },
    create: async (req = request, res = response) => {
        const body = req.body;

        if (body.section === 'armas') {
            const arma = await Arma.findById(body.elementId);
            if (!arma) {
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'El artículo requerido no existe.',
                            param: 'elementId',
                            location: 'body',
                        },
                    ],
                });
            }
        } else if (body.section === 'naturales') {
            const natural = await Natural.findById(body.elementId);
            if (!natural) {
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'El artículo requerido no existe.',
                            param: 'elementId',
                            location: 'body',
                        },
                    ],
                });
            }
        }

        const donacion = new Donacion(body);
        await donacion.save();
        return res.status(201).json(donacion);
    },
};

module.exports = donacionesController;
