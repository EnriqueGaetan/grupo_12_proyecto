const { log } = require('console');
const { Product } = require('../database/models');
const { Colors } = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const fs = require('fs');



const controllers = {
    products: async (req, res) => {
        const products = await Product.findAll({ raw: true });

        res.render('products', { products });
    },
    productDetail: async (req, res) => {
        try {
            const selectedProduct = await Product.findByPk(req.params.id, {
                include: ['options', 'colors'],
                raw: true,
                nest: true
            });

            res.render('productDetail', { selectedProduct });

            console.log(selectedProduct);

        } catch (error) {
            console.log(error);
        }
    },
    editProduct: async (req, res) => {
        const id = req.params.id;

        try {
            const product = await Product.findByPk(id, { raw: true });

            res.render('productEdit', { product });
        } catch (error) {
            console.log(error);
        }
    },
    updateProduct: async (req, res) => {
        const uploadedFile = req.file;

        const product = await Product.findByPk(req.params.id, { raw: true });
    
        let updatedProduct = product;
    
        if (uploadedFile) { 
            console.log(uploadedFile.path);
            const imageBuffer = fs.readFileSync(uploadedFile.path);
            const imageBlob = Buffer.from(imageBuffer, 'binary');
    
            updatedProduct = {
                ...updatedProduct,
                ...req.body,
                img: imageBlob,
            };
        }
    
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
            try {
                await Product.update(updatedProduct, {
                    where: {
                        id: req.params.id
                    }
                });
                return res.redirect('/products');
            } catch (error) {
                return res.render('productEdit', { errors: errors.mapped(), old: req.body, product: updatedProduct, uploadedFile: uploadedFile });
            }
        } else {
            return res.render('productEdit', { errors: errors.mapped(), old: req.body, product: updatedProduct, uploadedFile: uploadedFile });
        }
    }
    ,
    create: (req, res)=>{
        return res.render('productCreate');
    },
    createProduct: async (req,res) => {
        const uploadedFile = req.file;
        
        if (req.file == undefined ) {
            res.locals.errors = { img: { msg: 'Debes seleccionar una imagen' } };
            return res.render('productCreate');
        } 
        
        const imageBuffer = fs.readFileSync(uploadedFile.path);
        const imageBlob = Buffer.from(imageBuffer, 'binary');
        console.log(imageBlob)




        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            color_id: req.body.color,
            options_id: req.body.options,
            category_id: req.body.category,
            price: req.body.price,
            img: imageBlob,
        }

        console.log(newProduct)

            let errors = validationResult(req);

            if (errors.isEmpty()) {
                try {
                    const createdProduct = await Product.create(newProduct);
                    return res.redirect('/products');
        
                } catch (error) {
                    return res.render('productCreate', { errors: errors.mapped(), old: req.body });

                }               
            } else {
                return res.render('productCreate', { errors: errors.mapped(), old: req.body });
            };  

    },

    productCart: (req, res)=>{
        return res.render('productCart');
    },

    deleteProduct: async (req, res) => {
        const id = req.params.id;

        try {
            Product.destroy({
                where: {
                    id
                }
            })
        } catch (error) {
            console.log(error);
        }

        res.redirect('/products')
    },

    search: async (req, res) => {
        console.log(req.body.productSearch)
        
        try {
            const products = await Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.body.productSearch}%`
                    }
                }
                })
             

            res.render('productsSearch', { products });

        } catch (error) {
            console.log(error);
        }

    }
}



module.exports = controllers;