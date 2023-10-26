const express = require('express');
const usersController = require('../controllers/usersController')
const multer = require('multer');
const router = express.Router();
const userValidation = require('../middlewares/userMiddleware');
const productMiddleware2 = require('../middlewares/productMiddleware2');
const loginMiddleware = require('../middlewares/loginMiddleware');
const authUserMiddleware = require('../middlewares/authUserMiddleware');
const registerMiddleware = require('../middlewares/registerMiddleware')



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
router.get('/login', authUserMiddleware, usersController.login);
router.post('/login', userValidation, usersController.loginPost);

//logout
router.get('/logout', usersController.logout);



// Formulario de registro
router.get('/register',userValidation, usersController.register);
router.post('/register',[upload.single('image'), registerMiddleware], usersController.registerPost);

//Detalle de usuario
router.get('/:id/', usersController.detail);



// Formulario de edición 
router.get('/:id/edit', usersController.edit);
router.put('/:id/edit', [upload.single('img'), registerMiddleware], usersController.updateUser);


module.exports = router;