const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validateToken = (req = request, res = response, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            error: {
                msg: 'No hay token en la petición.',
                param: 'Authorization',
                location: 'headers',
            },
        });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            error: {
                msg: 'El token no es válido.',
                param: 'Authorization',
                location: 'headers',
            },
        });
    }
};

module.exports = validateToken;
