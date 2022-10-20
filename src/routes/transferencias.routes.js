const router = require('express').Router();
const transferenciasController = require('../controllers/transferencias.controllers');
const transferenciasValidations = require('../validations/transferencia.validations');
const validateToken = require('../middlewares/validateToken.middleware');
const validateFields = require('../middlewares/validateFields.middleware');

router
    .get('/', transferenciasController.getAll)
    .get(
        '/:id',
        [...transferenciasValidations.getOne, validateFields],
        transferenciasController.getOne
    )
    .post(
        '/',
        [validateToken, ...transferenciasValidations.create, validateFields],
        transferenciasController.create
    );

module.exports = router;
