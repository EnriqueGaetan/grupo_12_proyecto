const { log } = require('console');
const { Product } = require('../../database/models');
const { Color } = require('../../database/models');
const { Productcategory } = require('../../database/models');

const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const fs = require('fs');


const controllers = {
    products: async (req, res) => {
        
        const products = await Product.findAll({ 
            attributes: ['id', 'name', 'description', 'category_id'],
            include: [{ model: Productcategory, as: 'productcategorys', attributes: ['category'] }],
            raw: true });

        const productsAPI = products.map((products) => {
            return {
                id: products.id,
                name: products.name,
                description: products.description,
                detail: 'http://localhost:3001/api/products/' + products.id,
            }
        });

        const category_interior = await Product.findAll({
            where: {
                category_id: 1
            }
        });

        const category_exterior = await Product.findAll({
            where: {
                category_id: 2
            }
        });


        const category_accesorios = await Product.findAll({
            where: {
                category_id: 3
            }
        });



        res.json({
            status:200,
            count: products.length,
            countByCategory: [
                {Interior: category_interior.length}, 
                {Exterior: category_exterior.length}, 
                {Complementos: category_accesorios.length}, 

            ],
            category: [
                {
                  category: products.category_id,
                },
              ],
            products: productsAPI,
            

        });
    },
    productDetail: async (req, res) => {
        try {
            const selectedProduct = await Product.findByPk(req.params.id, {
                attributes: ['id', 'name', 'description', 'img', 'category_id', 'color_id',],
                include: [{ model: Productcategory, as: 'productcategorys', attributes: ['category'] }],
                include: [{ model: Color, as: 'colors', attributes: ['color'] }],
                raw: true,
                nest: true
            });

            if (!selectedProduct) {
                return res.status(404).send('Producto no encontrado');
            }


            // Categoría
            const categoryMappings = {
                1: "Interior",
                2: "Exterior",
                3: "Complementos"
              };
              
              if (categoryMappings[selectedProduct.category_id]) {
                selectedProduct.category_id = categoryMappings[selectedProduct.category_id];
              }

              
            // Color
            const colorMappings = {
                1: "Blanco",
                2: "Negro",
                3: "Gris",
                4: "Marrón",
                5: "Beige",
                6: "Rojo",
                7: "Azul",
                8: "Verde"
              };
              
              if (colorMappings[selectedProduct.color_id]) {
                selectedProduct.color_id = colorMappings[selectedProduct.color_id];
              }

            const imgURL = `http://localhost:3001/api/products/${req.params.id}/image`;

            const productAPI = {
                id: req.params.id,
                name: selectedProduct.name,
                category: selectedProduct.category_id,
                description: selectedProduct.description,
                color: selectedProduct.color_id,
                img: imgURL,
            };



            res.json({
                status: 200,
                Product: productAPI,

            })


        } catch (error) {
            console.log(error);
        }
    },
    productImage: async (req, res) => {
        try {
            const selectedProduct = await Product.findByPk(req.params.id, {
                attributes: ['img'],
                raw: true,
                nest: true,
            });

            if (!selectedProduct) {
                return res.status(404).send('Producto no encontrado');
            }

            //Acciones necesarias para decodificar imagen
            const imgBuffer = Buffer.from(selectedProduct.img, 'base64');
            res.contentType('image/png');
            res.send(imgBuffer);

        } catch (error) {
            console.error(error);
        }
    }
}



module.exports = controllers;