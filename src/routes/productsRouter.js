const express = require('express');
const productsController = require('../controllers/productsController');
const multer = require('multer');
const router = express.Router();
const userValidation = require('../middlewares/userMiddleware');
const productMiddleware = require('../middlewares/productMiddleware');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images'); 
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname); 
    },
  });
  
  const upload = multer({ storage: storage });


// Todos los productos /products
router.get('/', productsController.products);

// // Detalle de producto products/2/productDetail
router.get('/:id/productDetail', productsController.productDetail);


// // Editar producto - GET / PUT
router.get('/:id/edit', productMiddleware,  productsController.editProduct);
router.put('/:id/edit', upload.single('img'), productsController.updateProduct);

// Crear producto - GET / POST
router.get('/create',productMiddleware, productsController.create);
router.post('/', upload.single('img'), productsController.createProduct);


// Carrito de compras /products/carritocompras
router.get('/productCart', productsController.productCart);


// Borrar producto - DELETE
router.delete('/:id/delete', productMiddleware, productsController.deleteProduct);



module.exports = router;