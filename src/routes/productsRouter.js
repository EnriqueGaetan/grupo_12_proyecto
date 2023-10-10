const express = require('express');
const productsController = require('../controllers/productsController');
const multer = require('multer');
const router = express.Router();
const userValidation = require('../middlewares/userMiddleware');
const productMiddleware = require('../middlewares/productMiddleware');



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

// // Detalle de producto products/2/productDetail
router.get('/:id/productDetail', productsController.productDetail);


// // Editar producto - GET / PUT
router.get('/:id/edit', productMiddleware,  productsController.editProduct);
router.put('/:id/edit',  upload.any('img'), productsController.updateProduct);

// Crear producto - GET / POST
router.get('/create',productMiddleware, productsController.create);
router.post('/', upload.any('img'), productsController.createProduct);


// Carrito de compras /products/carritocompras
router.get('/productCart', productsController.productCart);



// Borrar producto - DELETE
router.delete('/:id/delete', productMiddleware, productsController.deleteProduct);



module.exports = router;