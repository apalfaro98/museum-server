const { Schema, model } = require('mongoose');

const armaSchema = Schema({
    propietario: {
        type: String,
        default: 'MUS MUN CAMAJUANI',
    },
    codigo: {
        type: String,
        required: true,
    },
    noInventario: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    registroEntrada: {
        type: Date,
        default: Date.now(),
    },
    manifestacion: {
        type: String,
        required: true,
    },
    denominacion: {
        type: String,
        required: true,
    },
    fabrica: {
        type: String,
    },
    noSerie: {
        type: String,
    },
    ciudadPais: {
        type: String,
    },
    anio: {
        type: Number,
    },
    epoca: {
        type: String,
        required: true,
    },
    alto: {
        type: String,
        required: true,
    },
    ancho: {
        type: String,
        required: true,
    },
    profundidad: {
        type: String,
        required: true,
    },
    calibre: {
        type: String,
    },
    materiales: {
        type: String,
        required: true,
    },
    mar: {
        type: String,
    },
    anx: {
        type: String,
    },
    sis: {
        type: String,
    },
    dec: {
        type: String,
    },
    ubicacion: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        default: 'historico',
    },
    gradoDeValor: {
        type: String,
        required: true,
    },
    origen: {
        type: String,
        required: true,
    },
    personalidad: {
        type: String,
    },
    acontecimiento: {
        type: String,
    },
    tasacion: {
        type: String,
    },
    expediente: {
        type: String,
        required: true,
    },
    notas: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    donacion: {
        type: Boolean,
    },
    entregadoPor: {
        type: String,
    },
    prestado: {
        type: Boolean,
        default: false,
    },
    recibido: {
        type: Boolean,
        default: false,
    },
    eliminado: {
        type: Boolean,
        default: false,
    },
});

module.exports = model('Arma', armaSchema);
