const userModel = require('../models/userModel');

function cookiesMiddleware (req, res, next) {
    // Si hay una cookie guardada con el email de un usuario
    if(req.cookies.email){
        // const userModel = require('./src/models/userModel');

        // Mediante el modelo vamos a buscar los datos del usuario
        const user = userModel.findByEmail(req.cookies.email);

        // Guardamos en session los datos del mismo
        req.session.user = user;
    }
    // Si no hay cookie de email, no hacemos nada
    next();
};

module.exports = cookiesMiddleware;