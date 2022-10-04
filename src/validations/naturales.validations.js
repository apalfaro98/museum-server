const { check } = require('express-validator');
const Natural = require('../models/naturales.model');
const naturalesValidations = {
	getOne: [
		check('id', 'El id no es un id válido.').isMongoId(),
		check('id').custom(async (id) => {
			const natural = await Natural.findById(id);
			if (!natural) {
				throw Error('El elemento solicitado no existe.');
			}
		}),
	],
	create: [
		check('codigo', 'El codigo es obligatorio.').not().isEmpty(),
		check('noInventario', 'El número de inventario es obligatorio.')
			.not()
			.isEmpty(),
		check('cantidad', 'La cantidad es obligatoria.').not().isEmpty(),
		check('manifestacion', 'La manifestación es obligatoria.').not().isEmpty(),
		check('comun', 'El nombre común es obligatorio.').not().isEmpty(),
		check('locColecta', 'La localización de colecta es obligatoria.')
			.not()
			.isEmpty(),
		check('pais', 'El país es obligatorio.').not().isEmpty(),
		check('fechaColecta', 'La fecha de colecta es obligatoria.')
			.not()
			.isEmpty(),
		check('alto', 'El alto es obligatorio.').not().isEmpty(),
		check('ancho', 'El ancho es obligatorio.').not().isEmpty(),
		check('profundidad', 'La profundidad es obligatoria.').not().isEmpty(),
		check('ubicacion', 'La ubicación es obligatoria.').not().isEmpty(),
		check('estado', 'El estado es obligatorio.').not().isEmpty(),
		check('gradoDeValor', 'El grado de valor es obligatorio.').not().isEmpty(),
		check('procedencia', 'La procedencia es obligatoria.').not().isEmpty(),
		check('acontecimiento', 'El acontecimiento es obligatorio.')
			.not()
			.isEmpty(),
		check('expediente', 'El expediente es obligatorio.').not().isEmpty(),
	],
	update: [
		check('id', 'El id no es un id válido.').isMongoId(),
		check('id').custom(async (id) => {
			const natural = await Natural.findById(id);
			if (!natural) {
				throw Error('El elemento solicitado no existe.');
			}
		}),
	],
	delete: [
		check('id', 'El id no es un id válido.').isMongoId(),
		check('id').custom(async (id) => {
			const natural = await Natural.findById(id);
			if (!natural) {
				throw Error('El elemento solicitado no existe.');
			}
		}),
	],
};

module.exports = naturalesValidations;
