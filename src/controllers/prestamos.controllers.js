const { request, response } = require('express');
const Prestamo = require('../models/prestamos.model');

const prestamosController = {
    getAll: async (req = request, res = response) => {
        const prestamos = await Prestamo.find();
        res.status(200).json(prestamos);
    },
    getOne: async (req = request, res = response) => {
        const { id } = req.params;
        const prestamo = await Prestamo.findById(id);

        res.status(200).json(prestamo);
    },
    create: async (req = request, res = response) => {
        const body = req.body;
        const prestamo = new Prestamo(body);
        await prestamo.save();
        return res.status(201).json(prestamo);
    },
    update: async (req = request, res = response) => {
        const { id } = req.params;
        const { fechaPrestamo, ...body } = req.body;
        await Prestamo.findByIdAndUpdate(id, body);
        const prestamo = await Prestamo.findById(id);
        res.status(200).json(prestamo);
    },
    delete: async (req = request, res = response) => {
        const { id } = req.params;

        const prestamo = await Prestamo.findByIdAndRemove(id);
        res.status(200).json(prestamo);
    },
};

module.exports = prestamosController;
