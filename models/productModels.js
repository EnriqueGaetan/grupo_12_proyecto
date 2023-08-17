const fs = require('fs');
const path = require('path');

const modelo = {
    fileRoute: path.join(__dirname, '../data/products.json'),

    findAll: () => {
        const jsonData = fs.readFileSync(modelo.fileRoute, 'utf-8');
        const products = JSON.parse(jsonData);

        return products;
    },

    findById: (id) => {
        const products = modelo.findAll();

        const selectedProduct = products.find(productoActual => productoActual.id == id);

        return selectedProduct;
    },

    createProduct: (bodyData) => {
        let products = modelo.findAll();

        const lastProdId = products[products.length - 1].id;

        const newProduct = {
            id: lastProdId + 1,
            ...bodyData
        };

        products.push(newProduct);

        const jsonData = JSON.stringify(products);

        fs.writeFileSync(modelo.fileRoute, jsonData, 'utf-8');

        return newProduct;
    },

    destroy: (id) => {
        let products = modelo.findAll();

        products = products.filter(productoActual => productoActual.id !== id);

        const jsonProducts = JSON.stringify(products);

        fs.writeFileSync(modelo.fileRoute, jsonProducts, 'utf-8');
    },

    updateProduct: (updatedProduct) => {
        let products = modelo.findAll();
        const prodIndex = products.findIndex(productoActual => productoActual.id === updatedProduct.id);
        products[prodIndex] = updatedProduct;
        const productsJson = JSON.stringify(products);
        fs.writeFileSync(modelo.fileRoute, productsJson, 'utf-8');
    }
};

module.exports = modelo;