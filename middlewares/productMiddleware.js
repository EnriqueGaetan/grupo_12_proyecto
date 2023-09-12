function productMiddleware (req, res, next) {
    
    if (res.locals.userLog) {
        next();     
    } else {
     res.redirect('/products')
}

}

// Middleware específico para edición de productos
// Ingresa a products/:id/edit si el usuario está logueado
// Pendiente: Se debe configurar productEdit para que figure/no figure el ícono "Editar producto"  

module.exports = productMiddleware;