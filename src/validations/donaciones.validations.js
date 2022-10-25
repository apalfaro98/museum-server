const { check } = require('express-validator');
const Donacion = require('../models/donaciones.model');

const donacionesValidations = {
    getOne: [
        check('id', 'El id no es un id válido.').isMongoId(),
        check('id').custom(async (id) => {
            const donacion = await Donacion.findById(id);
            if (!donacion) {
                throw Error('La donacion solicitada no existe.');
            }
        }),
    ],
    create: [
        check('donante', 'El nombre de la persona que dona es obligatorio.')
            .not()
            .isEmpty(),
        check('direccion', 'La direccion del donante es obligatoria.')
            .not()
            .isEmpty(),
        check('recibe', 'La persona que recibe la donacion es obligatoria.')
            .not()
            .isEmpty(),
        check('section', 'La seccion es obligatoria.').not().isEmpty(),
        check('elementId', 'El objeto transferido es requerido.')
            .not()
            .isEmpty(),
        check('elementId', 'El objeto donado es id.').isMongoId(),
    ],
};

module.exports = donacionesValidations;
