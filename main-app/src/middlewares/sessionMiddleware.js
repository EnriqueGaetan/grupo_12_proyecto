var User = require('../database/models').User;


async function sessionMiddleware(req, res, next) {
    if (req.cookies.email && !req.session.user) {
      try {
        const userToLogin = await User.findOne({ where: { email: req.cookies.email } });
  
        if (userToLogin) {
          req.session.user = userToLogin;
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    next();
  }
  
module.exports = sessionMiddleware;