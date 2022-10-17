const { Schema, model } = require('mongoose');

const transferenciaSchema = Schema({
    municipio: {
        type: String,
    },
    museoT: {
        type: String,
        default: 'MUS MUN CAMAJUANI',
    },
    fechaT: {
        type: Date,
        default: Date.now(),
    },
    responsableT: {
        type: String,
        required: true,
    },
    responsableR: {
        type: String,
        required: true,
    },
    museoR: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
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

module.exports = model('Transferencia', transferenciaSchema);
