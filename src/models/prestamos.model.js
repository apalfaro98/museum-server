const { Schema, model } = require('mongoose');

const prestamoSchema = Schema({
    prestado: {
        type: Boolean,
        required: true,
    },
    museo: {
        type: String,
        default: 'MUS MUN CAMAJUANI',
    },
    fechaPrestamo: {
        type: Date,
        default: Date.now(),
    },
    persona: {
        type: String,
        required: true,
    },
    organismo: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    fechaDevolucion: {
        type: Date,
        required: true,
    },
    entregadoPor: {
        type: String,
        required: true,
    },
    seccion: {
        type: String,
        required: true,
    },
    elementId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    observaciones: {
        type: String,
    },
});

module.exports = model('Prestamo', prestamoSchema);
