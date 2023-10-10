const { Product } = require('../database/models');


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
        const filenames = req.files.map(file => file.filename);

        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            color_id: req.body.color,
            options_id: req.body.options,
            category_id: req.body.category,
            price: req.body.price,
            img: filenames
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
    }

    }



module.exports = controllers;