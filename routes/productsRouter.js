    const express = require('express');
    const productsController = require('../controllers/productsController');
    const multer = require('multer');

    const router = express.Router();


    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/images/');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });

    const upload = multer({ storage: storage });

    // Todos los productos /products
    router.get('/', productsController.products);

    // Carrito de compras /products/carritocompras
    router.get('/productCart', productsController.productCart);

    // Detalle de producto products/2/productDetail
    router.get('/:id/productDetail', productsController.productDetail);

    // Crear producto - GET / POST
    router.get('/create', productsController.create);
    router.post('/',  upload.any('img'), productsController.createProduct);

    // Borrar producto - DELETE
    router.delete('/:id/delete', productsController.deleteProduct);
    
    
    // Editar producto - GET / PUT
    router.get('/:id/edit', productsController.editProduct);
    router.put('/:id/edit',upload.any('img'), productsController.updateProduct);






    module.exports = router;