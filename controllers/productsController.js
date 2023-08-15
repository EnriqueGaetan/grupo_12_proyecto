const productModel = require('../models/productModels');


const controllers = {
    carritocompras: (req, res)=>{
        return res.render('carritocompras');
    },

    productDetail: (req, res)=>{
        const productId = req.params.id;
        const selectedProduct = productModel.findById(productId);
        res.render('productDetail', {selectedProduct });
    },

    productCreate: (req, res)=>{
        return res.render('productCreate');
    },

    productEdit: (req, res)=>{
        return res.render('productEdit');
    },

    products: (req, res)=>{
        return res.render('products');
    }
    
}

module.exports = controllers;