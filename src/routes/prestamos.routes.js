const router = require('express').Router();
const prestamosController = require('../controllers/prestamos.controllers');
const prestamosValidations = require('../validations/prestamos.validations');
const validateToken = require('../middlewares/validateToken.middleware');
const validateFields = require('../middlewares/validateFields.middleware');

router
    .get('/', prestamosController.getAll)
    .get(
        '/:id',
        [...prestamosValidations.getOne, validateFields],
        prestamosController.getOne
    )
    .post(
        '/',
        [validateToken, ...prestamosValidations.create, validateFields],
        prestamosController.create
    )
    .put(
        '/:id',
        [validateToken, ...prestamosValidations.update, validateFields],
        prestamosController.update
    )
    .delete(
        '/:id',
        [validateToken, ...prestamosValidations.delete, validateFields],
        prestamosController.delete
    );

module.exports = router;
