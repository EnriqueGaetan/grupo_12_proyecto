const express = require('express');
const usersController = require('../controllers/usersController')
const multer = require('multer');
const router = express.Router();
const userValidation = require('../middlewares/userMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');
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



// Formulario de login
router.get('/login', userValidation,   usersController.login);
router.post('/login', usersController.loginPost);

//logout
router.get('/logout', usersController.logout);



// Formulario de registro
router.get('/register',userValidation, usersController.register);
router.post('/register',upload.any('img'), usersController.registerPost);

//Detalle de usuario
router.get('/:id/',productMiddleware, usersController.detail);



// Formulario de edición 
router.get('/:id/edit', productMiddleware, usersController.edit);
router.put('/:id/edit', productMiddleware, upload.any('img'), usersController.updateUser);


module.exports = router;