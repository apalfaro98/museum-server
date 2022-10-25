const router = require('express').Router();
const Arma = require('../models/armas.model');
const Natural = require('../models/naturales.model');

router.get('/', async (req = request, res = response) => {
    const armas = await Arma.find({
        eliminado: true,
    });
    const naturales = await Natural.find({
        eliminado: true,
    });

    const bajas = {
        armas,
        naturales,
    };
    res.status(200).json(bajas);
});

module.exports = router;
