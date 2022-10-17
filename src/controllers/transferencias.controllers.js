const { request, response } = require('express');
const Transferencia = require('../models/transferencia.model');
const Arma = require('../models/armas.model');
const Natural = require('../models/naturales.model');

const transferenciasController = {
    getAll: async (req = request, res = response) => {
        const transferencia = await Transferencia.find();
        res.status(200).json(transferencia);
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
            if (arma.cantidad >= body.cantidad) {
                newCant = arma.cantidad - body.cantidad;
                await Arma.findByIdAndUpdate(body.elementId, {
                    cantidad: newCant,
                });
            } else {
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'No hay suficientes artículos para extraer la cantidad requerida.',
                            param: 'cantidad',
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
            if (natural.cantidad >= body.cantidad) {
                newCant = natural.cantidad - body.cantidad;
                await Natural.findByIdAndUpdate(body.elementId, {
                    cantidad: newCant,
                });
            } else {
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'No hay suficientes artículos para extraer la cantidad requerida.',
                            param: 'cantidad',
                            location: 'body',
                        },
                    ],
                });
            }
        }

        const transferencia = new Transferencia(body);
        await transferencia.save();
        return res.status(201).json(transferencia);
    },
};

module.exports = transferenciasController;
