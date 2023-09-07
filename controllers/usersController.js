const controllers = {
    register: (req, res) => {
        return res.render('register');
    },

    registerPost: (req,res) => {
        res.send("Usuario OK");

    },


    login: (req, res) => {
        return res.render('login');
    },    

    
}

module.exports = controllers;