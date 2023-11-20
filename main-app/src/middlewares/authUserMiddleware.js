function authUserMiddleware (req, res, next) {
    
    if (res.locals.userLog) {
        res.redirect('/controlpanel')
    } else {
        next();     
    }

}

// Middleware específico para edición de productos
// Ingresa a products/:id/edit si el usuario está logueado
// Pendiente: Se debe configurar productEdit para que figure/no figure el ícono "Editar producto"  

module.exports = authUserMiddleware;