const controllers = {
    home: (req, res) => {
        return res.render('home');
    },
    registro: (req, res) => {
        return res.render('register');
    },
    
    login: (req, res) => {
        return res.render('login');
    },

    carritocompras: (req, res)=>{
        return res.render('carritocompras');
    },

    productDetail: (req, res)=>{
        return res.render('productDetail');
    }
    
}

module.exports = controllers;