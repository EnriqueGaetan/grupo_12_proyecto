const express = require('express');
const router = express.Router();

const productsController= require ( '../controllers/productsController')


router.get('/carritocompras', productsController.carritocompras);

router.get('/:id/productDetail', productsController.productDetail);

router.get('/create', productsController.productCreate);

router.get('/productEdit', productsController.productEdit);

router.get('/products', productsController.products);

module.exports = router;