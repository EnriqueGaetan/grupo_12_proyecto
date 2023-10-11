const express = require('express');
const productsController = require('../controllers/productsController');
 
const router = express.Router();

const mainController= require ( '../controllers/mainController')

router.get('/', mainController.home);

router.post('/products/search', productsController.search);

router.get("/pendingSite",(req, res) => {res.render('pendingSite')})



module.exports = router;