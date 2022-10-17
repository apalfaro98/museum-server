const { check } = require('express-validator');

const transferenciasValidations = {
    create: [
        check(
            'responsableT',
            'El nombre de la persona que realiza la transferencia es obligatorio.'
        )
            .not()
            .isEmpty(),
        check(
            'responsableR',
            'El nombre de la persona que recibe la transferencia es obligatorio.'
        )
            .not()
            .isEmpty(),
        check('cantidad', 'La cantidad de elementos es requerida.')
            .not()
            .isEmpty(),
        check('museoR', 'El museo que recibe la transferencia es obligatorio.')
            .not()
            .isEmpty(),
        check('section', 'La seccion es obligatoria.').not().isEmpty(),
        check('elementId', 'El objeto transferido es requerido.')
            .not()
            .isEmpty(),
    ],
};

module.exports = transferenciasValidations;
