const { request, response } = require('express');
const Arma = require('../models/armas.model');
const Natural = require('../models/naturales.model');

const getEstadistica = async (req = request, res = response) => {
    const armas = await Arma.find();
    let armaTotal = 0;

    const armaGradoIB = armas.filter(
        (arma) => arma.gradoDeValor == 'I' && arma.estado == 'B'
    );
    const armaGradoIR = armas.filter(
        (arma) => arma.gradoDeValor == 'I' && arma.estado == 'R'
    );
    const armaGradoIM = armas.filter(
        (arma) => arma.gradoDeValor == 'I' && arma.estado == 'M'
    );

    const armaGradoIIB = armas.filter(
        (arma) => arma.gradoDeValor == 'II' && arma.estado == 'B'
    );
    const armaGradoIIR = armas.filter(
        (arma) => arma.gradoDeValor == 'II' && arma.estado == 'R'
    );
    const armaGradoIIM = armas.filter(
        (arma) => arma.gradoDeValor == 'II' && arma.estado == 'M'
    );

    const armaGradoIIIB = armas.filter(
        (arma) => arma.gradoDeValor == 'III' && arma.estado == 'B'
    );
    const armaGradoIIIR = armas.filter(
        (arma) => arma.gradoDeValor == 'III' && arma.estado == 'R'
    );
    const armaGradoIIIM = armas.filter(
        (arma) => arma.gradoDeValor == 'III' && arma.estado == 'M'
    );

    armas.forEach((arma) => {
        armaTotal += parseInt(arma.cantidad);
    });

    const armaSala = armas.filter((arma) => arma.ubicacion == 'ALMACEN');
    const armaExpo = armas.filter((arma) => arma.ubicacion == 'EXPOSICION');
    const armaExcep = armas.filter((arma) => arma.ubicacion == 'EXCEPCIONAL');

    const naturales = await Natural.find();
    let naturalTotal = 0;

    const naturalGradoIB = naturales.filter(
        (natural) => natural.gradoDeValor == 'I' && natural.estado == 'B'
    );
    const naturalGradoIR = naturales.filter(
        (natural) => natural.gradoDeValor == 'I' && natural.estado == 'R'
    );
    const naturalGradoIM = naturales.filter(
        (natural) => natural.gradoDeValor == 'I' && natural.estado == 'M'
    );

    const naturalGradoIIB = naturales.filter(
        (natural) => natural.gradoDeValor == 'II' && natural.estado == 'B'
    );
    const naturalGradoIIR = naturales.filter(
        (natural) => natural.gradoDeValor == 'II' && natural.estado == 'R'
    );
    const naturalGradoIIM = naturales.filter(
        (natural) => natural.gradoDeValor == 'II' && natural.estado == 'M'
    );

    const naturalGradoIIIB = naturales.filter(
        (natural) => natural.gradoDeValor == 'III' && natural.estado == 'B'
    );
    const naturalGradoIIIR = naturales.filter(
        (natural) => natural.gradoDeValor == 'III' && natural.estado == 'R'
    );
    const naturalGradoIIIM = naturales.filter(
        (natural) => natural.gradoDeValor == 'III' && natural.estado == 'M'
    );

    naturales.forEach((natural) => {
        naturalTotal += parseInt(natural.cantidad);
    });

    const naturalSala = naturales.filter(
        (natural) => natural.ubicacion.toUpperCase() == 'ALMACEN'
    );
    const naturalExpo = naturales.filter(
        (natural) => natural.ubicacion.toUpperCase() == 'EXPOSICION'
    );
    const naturalExcep = naturales.filter(
        (natural) => natural.ubicacion.toUpperCase() == 'EXCEPCIONAL'
    );

    res.status(200).json({
        estadistica: [
            {
                name: 'ARMAS',
                gradoIB: armaGradoIB.length,
                gradoIR: armaGradoIR.length,
                gradoIM: armaGradoIM.length,
                gradoIIB: armaGradoIIB.length,
                gradoIIR: armaGradoIIR.length,
                gradoIIM: armaGradoIIM.length,
                gradoIIIB: armaGradoIIIB.length,
                gradoIIIR: armaGradoIIIR.length,
                gradoIIIM: armaGradoIIIM.length,
                total: armaTotal,
                sala: armaSala.length,
                expo: armaExpo.length,
                excep: armaExcep.length,
            },
            {
                name: 'CIENCIAS NATURALES',
                gradoIB: naturalGradoIB.length,
                gradoIR: naturalGradoIR.length,
                gradoIM: naturalGradoIM.length,
                gradoIIB: naturalGradoIIB.length,
                gradoIIR: naturalGradoIIR.length,
                gradoIIM: naturalGradoIIM.length,
                gradoIIIB: naturalGradoIIIB.length,
                gradoIIIR: naturalGradoIIIR.length,
                gradoIIIM: naturalGradoIIIM.length,
                total: naturalTotal,
                sala: naturalSala.length,
                expo: naturalExpo.length,
                excep: naturalExcep.length,
            },
        ],
    });
};

module.exports = getEstadistica;
