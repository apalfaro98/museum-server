const { Schema, model } = require('mongoose');

const naturalSchema = Schema({
	propietario: {
		type: String,
		default: 'MUS MUN CAMAJUANI',
	},
	codigo: {
		type: Number,
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
	categoria: {
		type: String,
	},
	comun: {
		type: String,
		required: true,
	},
	tecnico: {
		type: String,
	},
	locColecta: {
		type: String,
		required: true,
	},
	pais: {
		type: String,
		required: true,
	},
	fechaColecta: {
		type: String,
		required: true,
	},
	colector: {
		type: String,
	},
	fecha: {
		type: String,
	},
	lote: {
		type: String,
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
	procedencia: {
		type: String,
		required: true,
	},
	acontecimiento: {
		type: String,
		required: true,
	},
	expediente: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
	},
	prestado: {
		type: Boolean,
		required: true,
	},
	recibido: {
		type: Boolean,
		required: true,
	},
	prestamos: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Prestamo',
		},
	],
});

module.exports = model('Natural', naturalSchema);
