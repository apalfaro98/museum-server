const { Schema, model } = require('mongoose');

const prestamoSchema = Schema({
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
	observaciones: {
		type: String,
		required: true,
	},
});

module.exports = model('Prestamo', prestamoSchema);
