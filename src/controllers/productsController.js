const productModel = require('../models/productModels');


const controllers = {
    productCart: (req, res)=>{
        return res.render('productCart');
    },

    productDetail: (req, res)=>{
        const productId = req.params.id;
        const selectedProduct = productModel.findById(productId);
        res.render('productDetail', {selectedProduct });
    },


    create: (req, res)=>{
        return res.render('productCreate');
    },

    createProduct: (req, res)=> {
        console.log(req.files);

        const filenames = req.files.map(file => file.filename);

        console.log(filenames)

        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            color: req.body.color,
            options: req.body.options,
            category: req.body.category,
            price: req.body.price,
            img: filenames
        }

        const createdProduct = productModel.createProduct(newProduct);
        res.redirect('products');
    },


    editProduct: (req, res)=>{
        const product = productModel.findById(Number(req.params.id));
        res.render('productEdit', { product });
    },

    updateProduct: (req, res)=>{
        console.log(req.files);

        const filenames = req.files.map(file => file.filename);

        console.log(filenames)
        let updatedProduct = {
            id: Number(req.params.id),
        };

        updatedProduct = {
            ...updatedProduct,
            ...req.body,
            img: filenames

        };

        productModel.updateProduct(updatedProduct);

        res.redirect('/products');
    },



    products: (req, res)=>{
        const products = productModel.findAll();

        res.render('products', {products});
    },

    deleteProduct: (req,res)=> {
        productModel.destroy(Number(req.params.id));
        res.redirect('/products');
    }
    
}

module.exports = controllers;