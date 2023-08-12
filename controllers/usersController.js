const controllers = {
    registro: (req, res) => {
        return res.render('register');
    },
    
    login: (req, res) => {
        return res.render('login');
    },    
}

module.exports = controllers;