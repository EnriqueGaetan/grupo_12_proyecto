const express = require('express');
const usersController = require('../controllers/usersController')
const multer = require('multer');
const router = express.Router();
const userMiddleware = require('../middlewares/userMiddleware');
const productMiddleware = require('../middlewares/productMiddleware');
const loginMiddleware = require('../middlewares/loginMiddleware');
const authUserMiddleware = require('../middlewares/authUserMiddleware');
const registerMiddleware = require('../middlewares/registerMiddleware');
const updateUserMiddleware = require('../middlewares/updateUserMiddleware');



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
router.get('/login', userMiddleware, usersController.login);
router.post('/login', usersController.loginPost);

//logout
router.get('/logout', usersController.logout);

// Formulario de registro
router.get('/register',userMiddleware, usersController.register);
router.post('/register',[upload.single('image'), registerMiddleware], usersController.registerPost);

//Detalle de usuario
router.get('/:id/', usersController.detail);

// Formulario de edición 
router.get('/:id/edit', authUserMiddleware, usersController.edit);
router.put('/:id/edit', [upload.single('image'), updateUserMiddleware], usersController.updateUser);

module.exports = router;