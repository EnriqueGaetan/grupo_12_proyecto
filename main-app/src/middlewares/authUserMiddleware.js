function authUserMiddleware(req, res, next) {
  if (!res.locals.userLog || (res.locals.userLog && res.locals.userLog.category_id !== 1)) {
    res.status(403).send('Acceso prohibido');
    } else {
      next();
    }
  }
  

// Miidleware de permisos de usuario. Si es admin permite la edición de productos y usuarios.

module.exports = authUserMiddleware;