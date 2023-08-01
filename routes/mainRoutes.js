const express = require('express');
const router = express.Router();

const mainController= require ( '../controllers/mainController')

router.get('/', mainController.home);

router.get('/login', mainController.login);

router.get('/register', mainController.registro);

router.get('/carritocompras', mainController.carritocompras);

router.get('/productDetail', mainController.productDetail);

router.get('/productAdd', mainController.productAdd);

router.get('/productEdit', mainController.productEdit);



module.exports = router;