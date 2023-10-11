const { log } = require('console');
const { Product } = require('../database/models');
const { Op } = require('sequelize');

const fs = require('fs');



const controllers = {
    products: async (req, res) => {
        const products = await Product.findAll({ raw: true });

        res.render('products', { products });
    },
    productDetail: async (req, res) => {
        try {
            const selectedProduct = await Product.findByPk(req.params.id, {
                raw: true,
                nest: true
            });

            res.render('productDetail', { selectedProduct });

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

        if (!uploadedFile) {
            console.error('No se ha subido ningún archivo');
            res.status(400).send('No se ha subido ningún archivo');
            return;
        }
    

        console.log(uploadedFile.path)
        const imageBuffer = fs.readFileSync(uploadedFile.path);
        const imageBlob = Buffer.from(imageBuffer, 'binary');

        console.log(imageBlob)

        let updatedProduct = {
            id: Number(req.params.id),
        };

        updatedProduct = {
            ...updatedProduct,
            ...req.body,
            img: imageBlob,

        };


        try {         
            await Product.update(updatedProduct, {
                where: {
                    id: req.params.id
                }
            })
                

        } catch (error) {
            console.log(error);
        }
        res.redirect('/products');


    },
    create: (req, res)=>{
        return res.render('productCreate');
    },
    createProduct: async (req,res) => {
        const uploadedFile = req.file;

        console.log(uploadedFile.path)
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


        try {
            const createdProduct = await Product.create(newProduct);

            return res.redirect('/products');
        } catch (error) {
            console.log(error);
        }

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