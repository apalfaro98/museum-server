const { request, response } = require('express');
const Prestamo = require('../models/prestamos.model');
const Arma = require('../models/armas.model');
const Natural = require('../models/naturales.model');

const prestamosController = {
    getAll: async (req = request, res = response) => {
        const prestamos = await Prestamo.find();
        res.status(200).json(prestamos);
    },
    getOne: async (req = request, res = response) => {
        const { id } = req.params;
        const prestamo = await Prestamo.findById(id);

        if (prestamo.seccion === 'armas') {
            const arma = await Arma.findById(prestamo.elementId);
            return res.status(200).json({
                prestamo,
                articulo: arma,
            });
        } else if (prestamo.seccion === 'naturales') {
            const natural = await Natural.findById(prestamo.elementId);
            return res.status(200).json({
                prestamo,
                articulo: natural,
            });
        }

        res.status(200).json(prestamo);
    },
    create: async (req = request, res = response) => {
        const body = req.body;
        if (body.prestado) {
            if (body.seccion === 'armas') {
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
                    if (newCant === 0) {
                        await Arma.findByIdAndUpdate(body.elementId, {
                            prestado: true,
                        });
                    }
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
            } else if (body.seccion === 'naturales') {
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
                    if (newCant === 0) {
                        await Natural.findByIdAndUpdate(body.elementId, {
                            prestado: true,
                        });
                    }
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
        }
        const prestamo = new Prestamo(body);
        await prestamo.save();
        return res.status(201).json(prestamo);
    },
    update: async (req = request, res = response) => {
        const { id } = req.params;
        const { fechaDevolucion } = req.body;
        await Prestamo.findByIdAndUpdate(id, {
            fechaDevolucion,
        });
        const prestamo = await Prestamo.findById(id);
        res.status(200).json(prestamo);
    },
    delete: async (req = request, res = response) => {
        const { id } = req.params;

        const prestamo = await Prestamo.findById(id);
        if (prestamo.prestado) {
            if (prestamo.seccion === 'armas') {
                const arma = await Arma.findById(prestamo.elementId);
                const newCant = arma.cantidad + prestamo.cantidad;
                await Arma.findByIdAndUpdate(prestamo.elementId, {
                    cantidad: newCant,
                });
            } else if (prestamo.seccion === 'naturales') {
                const natural = await Natural.findById(prestamo.elementId);
                const newCant = natural.cantidad + prestamo.cantidad;
                await Natural.findByIdAndUpdate(prestamo.elementId, {
                    cantidad: newCant,
                });
            }
        } else {
            if (prestamo.seccion === 'armas') {
                await Arma.findByIdAndRemove(prestamo.elementId);
            } else if (prestamo.seccion === 'naturales') {
                await Natural.findByIdAndRemove(prestamo.elementId);
            }
        }
        const prest = await Prestamo.findByIdAndRemove(id);
        res.status(200).json(prest);
    },
};

module.exports = prestamosController;
