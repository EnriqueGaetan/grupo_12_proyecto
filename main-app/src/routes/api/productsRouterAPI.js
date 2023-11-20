const express = require('express');
const productsController = require('../../controllers/api/productsController');
const router = express.Router();
const path = require('path');



router.get('/', productsController.products);
router.get('/:id', productsController.productDetail);
router.get('/:id/image', productsController.productImage);

module.exports = router; 

