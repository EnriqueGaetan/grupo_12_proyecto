const express = require('express');
const router = express.Router();

const usersController= require ( '../controllers/usersController')


// Formulario de login
router.get('/login', usersController.login);


// Formulario de registro
router.get('/register', usersController.register);
router.post('/register', usersController.registerPost);




module.exports = router;