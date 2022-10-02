const { check } = require('express-validator');
const Arma = require('../models/armas.model');

const armasValidations = {
	getOne: [
		check('id', 'El id no es un id válido.').isMongoId(),
		check('id').custom(async (id) => {
			const arma = await Arma.findById(id);
			if (!arma) {
				throw Error('El arma solicitada no existe.');
			}
		}),
	],
	create: [
		check('codigo', 'El codigo es obligatorio.').not().isEmpty(),
		check('noInventario', 'El numero de Inventario es obligatorio.')
			.not()
			.isEmpty(),
		check('cantidad', 'La cantidad es obligatoria.').not().isEmpty(),
		check('manifestacion', 'La manifestación es obligatoria.').not().isEmpty(),
		check('denominacion', 'La denominación es obligatoria.').not().isEmpty(),
		check('epoca', 'La época es obligatoria.').not().isEmpty(),
		check('alto', 'El alto es obligatorio.').not().isEmpty(),
		check('ancho', 'El ancho es obligatorio.').not().isEmpty(),
		check('profundidad', 'La profundidad es obligatoria.').not().isEmpty(),
		check('calibre', 'El calibre es obligatorio.').not().isEmpty(),
		check('materiales', 'Los materiales son obligatorios.').not().isEmpty(),
		check('ubicacion', 'La ubicacion es obligatoria.').not().isEmpty(),
		check('estado', 'El estado es obligatorio.').not().isEmpty(),
		check('gradoDeValor', 'El Grado de Valor es obligatorio.').not().isEmpty(),
		check('origen', 'El Origen es obligatorio.').not().isEmpty(),
		check('expediente', 'El Expediente es obligatorio.').not().isEmpty(),
	],
	update: [
		check('id', 'El id no es un id válido.').isMongoId(),
		check('id').custom(async (id) => {
			const arma = await Arma.findById(id);
			if (!arma) {
				throw Error('El arma solicitada no existe.');
			}
		}),
	],
	delete: [
		check('id', 'El id no es un id válido.').isMongoId(),
		check('id').custom(async (id) => {
			const arma = await Arma.findById(id);
			if (!arma) {
				throw Error('El arma solicitada no existe.');
			}
		}),
	],
};

module.exports = armasValidations;
