function userLog (req, res, next)  {
        res.locals.userLog = req.session.user;

        console.log("Estoy en midd userLog");
        console.log(res.locals.userLog);

        
        // console.log("Estoy en midd " + res.locals.userLog);
        next();
    };

module.exports = userLog;