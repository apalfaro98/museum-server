const { Schema, model } = require('mongoose');

const donacionSchema = Schema({
    municipio: {
        type: String,
    },
    museo: {
        type: String,
        default: 'MUS MUN CAMAJUANI',
    },
    fecha: {
        type: Date,
        default: Date.now(),
    },
    donante: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    recibe: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    elementId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

module.exports = model('Donacion', donacionSchema);
