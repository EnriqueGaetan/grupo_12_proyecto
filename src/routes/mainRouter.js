const express = require('express');
const productsController = require('../controllers/productsController');
const mainController= require ( '../controllers/mainController')

 
const router = express.Router();


router.get('/', mainController.home);

router.post('/products/search', productsController.search);

router.get("/pendingSite",(req, res) => {res.render('pendingSite')})

router.get("/controlpanel", mainController.controlpanel )



module.exports = router;