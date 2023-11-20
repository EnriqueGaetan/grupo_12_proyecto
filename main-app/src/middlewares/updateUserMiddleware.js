const { body, validationResult } = require('express-validator');
const path = require('path');


const updateUserMiddleware = [
  body('firstName')
    .notEmpty().withMessage('Debe ingresar un nombre')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('lastName')
    .notEmpty().withMessage('Debe ingresar un apellido')
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email')
    .notEmpty().withMessage('Debe ingresar una dirección de correo electrónico')
    .isEmail().withMessage('Ingrese una dirección de correo electrónico válida'),



  body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
    if (file) {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error('Extensiones permitidas: jpg, png, jpeg, gif');
      }
    } 
    return true;
  })
];

module.exports = updateUserMiddleware;