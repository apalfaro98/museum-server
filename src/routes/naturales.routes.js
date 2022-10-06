const router = require('express').Router();
const naturalesController = require('../controllers/naturales.controllers');
const naturalesValidations = require('../validations/naturales.validations');
const validateToken = require('../middlewares/validateToken.middleware');
const validateFields = require('../middlewares/validateFields.middleware');

router
    .get('/', naturalesController.getAll)
    .get(
        '/:id',
        [...naturalesValidations.getOne, validateFields],
        naturalesController.getOne
    )
    .post(
        '/',
        [validateToken, ...naturalesValidations.create, validateFields],
        naturalesController.create
    )
    .put(
        '/:id',
        [validateToken, ...naturalesValidations.update, validateFields],
        naturalesController.update
    )
    .delete(
        '/:id',
        [validateToken, ...naturalesValidations.delete, validateFields],
        naturalesController.delete
    );

module.exports = router;
