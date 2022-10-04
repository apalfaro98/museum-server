const router = require('express').Router();
const armasController = require('../controllers/armas.controllers');
const armasValidations = require('../validations/armas.validations');
const validateToken = require('../middlewares/validateToken.middleware');
const validateFields = require('../middlewares/validateFields.middleware');

router
    .get('/', armasController.getAll)
    .get(
        '/:id',
        [...armasValidations.getOne, validateFields],
        armasController.getOne
    )
    .post(
        '/',
        [validateToken, ...armasValidations.create, validateFields],
        armasController.create
    )
    .put(
        '/:id',
        [validateToken, ...armasValidations.update, validateFields],
        armasController.update
    )
    .delete(
        '/:id',
        [validateToken, ...armasValidations.delete, validateFields],
        armasController.delete
    );

module.exports = router;
