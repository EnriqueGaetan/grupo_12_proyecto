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
    },

    productAdd: (req, res)=>{
        return res.render('productAdd');
    },

    productEdit: (req, res)=>{
        return res.render('productEdit');
    }
    
}

module.exports = controllers;