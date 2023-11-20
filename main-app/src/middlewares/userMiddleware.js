const { validationResult } = require('express-validator');

function userMiddleware(req, res, next) {
    if (res.locals.userLog) {
        res.redirect('/')
    } else {
        next();
    }
}
module.exports = userMiddleware;

    // Middleware específico para login y register
    // Si el usuario está logueado no ingresa a los sitios /users/login y /users/register
