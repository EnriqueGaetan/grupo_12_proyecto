const middlewares = {
    userLog: (req, res, next) => {
        res.locals.userLog = req.session.user;
        

        next();
    }
};

module.exports = middlewares;