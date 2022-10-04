const router = require('express').Router();
const getEstadistica = require('../controllers/estadistica.controllers');

router.get('/', getEstadistica);
module.exports = router;
