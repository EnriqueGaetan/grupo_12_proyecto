function userMiddleware (req, res, next) {
    
    if (res.locals.userLog) {
        res.redirect('/')

    } else {
     next();  
}
}

// Middleware específico para login y register
// Si el usuario está logueado no ingresa a los sitios /users/login y /users/register

module.exports = userMiddleware;