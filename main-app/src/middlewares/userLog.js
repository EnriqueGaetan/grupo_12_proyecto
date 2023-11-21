function userLog (req, res, next)  {
        res.locals.userLog = req.session.user;

        next();
    };

module.exports = userLog;

//guarda datos de sesión