const { check } = require('express-validator');
const Prestamo = require('../models/prestamos.model');

const prestamosValidations = {
    getOne: [
        check('id', 'El id no es un id válido.').isMongoId(),
        check('id').custom(async (id) => {
            const prestamo = await Prestamo.findById(id);
            if (!prestamo) {
                throw Error('El prestamo solicitado no existe.');
            }
        }),
    ],
    create: [
        check(
            'persona',
            'Los nombres de las personas que realizan y reciben el préstamo son obligatorios.'
        )
            .not()
            .isEmpty(),
        check(
            'organismo',
            'El nombre del organismo al que pertenece la persona es requerido.'
        )
            .not()
            .isEmpty(),
        check('cantidad', 'La cantidad de elementos es requerida.')
            .not()
            .isEmpty(),
        check('fechaDevolucion', 'La fecha de devolución es requerida.')
            .not()
            .isEmpty(),
        check(
            'entregadoPor',
            'La persona responsable por parte del museo es requerida.'
        )
            .not()
            .isEmpty(),
        check(
            'seccion',
            'La sección a la que pertenece el objeto prestado es requerida.'
        )
            .not()
            .isEmpty(),
        check('elementId', 'El objeto prestado es requerido.').not().isEmpty(),
    ],
    update: [
        check('id', 'El id no es un id válido.').isMongoId(),
        check('id').custom(async (id) => {
            const prestamo = await Prestamo.findById(id);
            if (!prestamo) {
                throw Error('El prestamo solicitado no existe.');
            }
        }),
    ],
    delete: [
        check('id', 'El id no es un id válido.').isMongoId(),
        check('id').custom(async (id) => {
            const prestamo = await Prestamo.findById(id);
            if (!prestamo) {
                throw Error('El prestamo solicitado no existe.');
            }
        }),
    ],
};

module.exports = prestamosValidations;
