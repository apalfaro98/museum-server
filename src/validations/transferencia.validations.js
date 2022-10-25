const { check } = require('express-validator');
const Transferencia = require('../models/transferencia.model');

const transferenciasValidations = {
    getOne: [
        check('id', 'El id no es un id válido.').isMongoId(),
        check('id').custom(async (id) => {
            const transferencia = await Transferencia.findById(id);
            if (!transferencia) {
                throw Error('La transferencia solicitada no existe.');
            }
        }),
    ],
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
        check('elementId', 'El objeto transferido es id.').isMongoId(),
    ],
};

module.exports = transferenciasValidations;
