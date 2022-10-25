const router = require('express').Router();
const donacionesController = require('../controllers/donaciones.controller');
const donacionesValidations = require('../validations/donaciones.validations');
const validateToken = require('../middlewares/validateToken.middleware');
const validateFields = require('../middlewares/validateFields.middleware');

router
    .get('/', donacionesController.getAll)
    .get(
        '/:id',
        [...donacionesValidations.getOne, validateFields],
        donacionesController.getOne
    )
    .post(
        '/',
        [validateToken, ...donacionesValidations.create, validateFields],
        donacionesController.create
    );

module.exports = router;
